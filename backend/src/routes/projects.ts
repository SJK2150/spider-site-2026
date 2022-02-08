import { Router } from 'express';
import {
  sequelize,
  Project,
  Member,
  ProjectAttributes
} from '../database/database';
import multer from 'multer';
import {
  existsSync,
  mkdirSync,
  rm,
  unlinkSync,
  readdirSync,
  renameSync,
  rmdirSync
} from 'fs';
import path from 'path';
import pino from 'pino';
import fse from 'fs-extra';
import console from 'console';
import { jwt_verify } from '../utils/middleware';

const imageHandler = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      let pathname = path.resolve('./', 'temp/projects/' + req.body.name);
      if (!existsSync(pathname)) {
        mkdirSync(pathname, { recursive: true });
      }
      cb(null, pathname);
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
  }),
  fileFilter: (req, file, cb) => {
    let allowedExt: RegExp = /(\.jpg|\.jpeg|\.png)$/i;
    if (!file.originalname.match(allowedExt)) {
      return cb(new Error('File type is not jpg/jpeg/png') as any, false);
    }
    return cb(null, true);
  }
}).array('project');

const logger = pino({
  level: 'info',
  prettyPrint: process.env.ENV === 'DEV'
});

//TODO: Multer addition

let router = Router();

router.get('/details', async (req, res) => {
  try {
    const project_details = await Project.findAll({
      include: Member
    });
    res.status(200).json(project_details);
  } catch (err) {
    logger.error(`${err}`);
    res.status(500).send('Internal Server/Database Error!');
  }
});

router.get('/details/:id', async (req, res) => {
  let project_id = parseInt(req.params.id);
  try {
    const project_detail = await Project.findOne({
      where: {
        id: project_id
      },
      include: Member
    });
    res.status(200).json(project_detail);
  } catch (err) {
    logger.error(`${err}`);
    res.status(500).send('Internal Server/Database Error!');
  }
});

router.use('/', jwt_verify);

router.post('/add', async (req, res) => {
  /*let proj_check = await Project.findOne({
    where: {
      name: req.body.name
    }
  })
  if (proj_check) {
    res.status(403).send("Project Already exists")
  }
  else*/
  imageHandler(req, res, async (err) => {
    if (err) {
      logger.error(err);
      res.status(400).send('File type not in jpg/jpeg/png');
    } else if (!req.files) {
      logger.error('0 Files sent');
      res.status(400).send('At least 1 file needs to be sent');
    } else {
      let pathname = path.resolve('./', `public/projects/${req.body.name}/`);
      let temporaryPathname = path.resolve(
        './',
        `temp/projects/${req.body.name}/`
      );
      if (!existsSync(pathname)) {
        mkdirSync(pathname, { recursive: true });
      }
      let members_ids = req.body['members']
        ? req.body['members']
        : res.send('Member field missing');
      delete req.body['members'];
      const project_details: ProjectAttributes = req.body;
      let members: Array<Member> = [];

      for (let id of members_ids) {
        try {
          let member = await Member.findByPk(id);

          if (member !== null) {
            members.push(member);
          } else {
            res.send(`Member ${id} does not exist!`);
          }
        } catch (err) {
          console.log(`Error(Member finding): ${err}`);
          res.status(500).send('Internal Server/Database Error!');
        }
      }

      try {
        let image_files: any = req.files;
        project_details['dp_url'] =
          pathname + '/' + image_files[0].originalname;
        /*image_files.shift();
        project_details['project_photo_url'] = image_files.map(
          (file: { originalname: any }) => pathname + '/' + file.originalname
        );*/
        project_details['project_photo_url'] = pathname + '/' + image_files[1].originalname
        console.log(project_details);

        return await sequelize.transaction(async (t) => {
          let new_project = await Project.create(project_details, {
            transaction: t
          });
          if (members !== null) {
            await new_project.addMembers(members, { transaction: t });
          }
          renameSync(
            temporaryPathname ,
            pathname
          );
          rmdirSync(temporaryPathname); //move from temp to public
          logger.info(
            `Project ${new_project.name} created, id: ${new_project.id}`
          );
          res.status(201).send('Project Added');
        });

      } catch (err) {
        logger.error(`Error(Project Creation): ${err}`);
        await rm(temporaryPathname, { recursive: true, force: true }, (err) => {
          err ? logger.error(err) : null;
        });
        res.status(500).send('Internal Server/Database Error!');
      }
    }
  });
});

interface ProjectUpdation {
  name?: string;
  desc?: string;
  domain?: string;
  dp_url_change?: boolean;
  project_url?: string;
  project_photo_url_removal?: string;
  project_video_url?: string;
}

//TODO: Handle file update reversal when err in sql occurs
router.put('/update/:id', async (req, res) => {
  let project_id: number = parseInt(req.params.id);

  // Check if member exists
  const project_detail = await Project.findByPk(project_id);
  if (!project_detail) {
    return res.status(403).send('No such project exists');
  }

  imageHandler(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      logger.error(err);
      return res.status(400).send(err);
    } else if (err) {
      logger.error(err);
      return res.status(400).send('File type is not jpg/jpeg/png');
    } else {
      let pathname = path.resolve('./', `public/projects/${req.body.name}/`);
      let temporaryPathname = path.resolve(
        './',
        `temp/projects/${req.body.name}/`
      );
      let members_added = req.body['members_added'];
      let members_removed = req.body['members_removed'];
      delete req.body['members_added'];
      delete req.body['members_removed'];
      console.log('MemberS', members_added, members_removed);
      let update_data = req.body;

      /**
       * Handles project photo media removal
       * if project_photo_url_removal is not null, then provided file paths will be removed from project_photo_url,
       * and the updated with the update_data
       */
      if (
        update_data['project_photo_url_removal'] &&
        project_detail &&
        project_detail['project_photo_url']
      ) {
        let urls: Array<String> = [];
        update_data['project_photo_url_removal'].forEach(async (val: any) => {
          if (val) {
            let ind = project_detail['project_photo_url'].indexOf(val);
            if (ind > -1) {
              await unlinkSync(project_detail['project_photo_url'][ind]);
              project_detail['project_photo_url'].splice(ind, 1);
              urls = project_detail['project_photo_url'];
            }
          }
        });
        update_data['project_photo_url'] = urls;
        delete update_data['project_photo_url_removal'];
      }

      /**
       * if files have been sent:
       * A) the first file will be considered as dp file if dp_url_change is true
       * B) If more than one file is sent the rest of the files will be considered to be new project photos
       */

      if (req.files) {
        let images: any = req.files;
        if (Boolean(update_data.dp_url_change)) {
          await unlinkSync(project_detail.dp_url);
          update_data['dp_url'] = pathname + '/' + images[0].originalname;
          images.shift();
          delete update_data.dp_url_change;
        }
        if (req.files.length > 1) {
          let urls = images.map(
            (file: { originalname: any }) => pathname + '/' + file.originalname
          );
          console.log(update_data);
          if (update_data['project_photo_url']) {
            update_data['project_photo_url'] =
              update_data['project_photo_url'].concat(urls);
          } else {
            update_data['project_photo_url'] = urls;
          }
        }
      }

      try {
        const result = await sequelize.transaction(async (t) => {
          await Project.update(update_data, {
            where: {
              id: project_id
            },
            transaction: t
          });
          if (members_added && project_detail) {
            project_detail.addMembers(members_added, { transaction: t });
          }
          if (members_removed && project_detail) {
            project_detail.removeMembers(members_removed, { transaction: t });
          }
        });
        /**
         * Move all files of temp/projects/{name} to public/projects/{name}
         * And delete temp/projects/{name} - rmdir()
         */
        const files = readdirSync(temporaryPathname);
        files.forEach((file) => {
          renameSync(temporaryPathname + '/' + file, pathname + '/' + file);
        });
        rmdirSync(temporaryPathname);
        logger.info('Project Updation Done');
        res.status(201).send('Project Updation Done');
      } catch (err) {
        logger.error(`${err}`);
        if (existsSync(temporaryPathname)) {
          rmdirSync(temporaryPathname);
        }
        res.status(500).send('Internal Server/Database Error!');
      }
    }
  });
});

router.delete('/delete/:id', async (req, res) => {
  let project_id: number = parseInt(req.params.id);
  let project = await Project.findByPk(project_id);
  if (!project) {
    res.status(403).send("Project Doesn't exist");
  } else {
    try {
      await Project.destroy({
        where: {
          id: project_id
        }
      });
      await rm(
        path.resolve('./') + '/public/projects/' + project.name,
        { recursive: true, force: true },
        (err) => {
          err ? logger.error(err) : null;
        }
      );
      logger.info('Project Deleted');
      res.status(200).send('Project Deleted');
    } catch (err) {
      logger.error(`${err}`);
      res.status(500).send('Internal Server/Database Error!');
    }
  }
});

export { router };
