import { Router } from 'express';
import {
  Achievement,
  AchievementAttributes,
  Member,
  sequelize
} from '../database/database';
import pino from 'pino';
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
import fse from 'fs-extra';
import console from 'console';
//import { jwt_verify } from '../utils/middleware';
/*
const imageHandler = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      let pathname = path.resolve('./', 'temp/achievements');
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
}).single('achievement_photo');
*/
const logger = pino({
  level: 'info',
  prettyPrint: process.env.ENV === 'DEV'
});
let router = Router();

router.get('/details', async (req, res) => {
  try {
    var hardware : Achievement [] = []
    var software : Achievement [] = []
    let achievements = await Achievement.findAll({
      include: Member
    });
    achievements.forEach((achievement)=>{
      if(achievement.domain==="TRONIX"){
        hardware.push(achievement)
      } else {
        software.push(achievement)
      }
    })
    res.status(200).json({"hardware":hardware,"software":software});
  } catch (err) {
    logger.error(`${err}`);
    res.status(500).send('Internal Server error');
  }
});
router.get('/details/:id', async (req, res) => {
  let achivementId = parseInt(req.params.id);
  try {
    let achievement = await Achievement.findOne({
      where: {
        id: achivementId
      }
    });
    res.status(200).json(achievement);
  } catch (err) {
    logger.error(`${err}`);
    res.status(500).send('Internal Server error');
  }
});
/*
router.use('/', jwt_verify);

router.post('/add', async (req, res) => {
  imageHandler(req, res, async (err) => {
    if (err) {
      logger.error(err);
      res.status(400).send('File type is not jpg/jpeg/png');
    } else if (!req.file || req.files) {
      logger.error('0 or more than 1 file sent');
      res.status(400).send('Send only 1 image file');
    } else {
      let temporaryPathname = path.resolve('./', 'temp/achievements/');
      let pathname = path.resolve('./', 'public/achievements/');
      if (!existsSync(pathname)) {
        mkdirSync(pathname, { recursive: true });
      }
      let members_ids = req.body['members']
        ? req.body['members']
        : res.send('Member field missing');
      delete req.body['members'];
      const achievement_details: AchievementAttributes = req.body;
      let members: Array<Member> = [];
      console.log(req.body);
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
        achievement_details['achievement_photo_url'] =
          pathname + '/' + req.file.originalname;
        return await sequelize.transaction(async (t) => {
          let new_achievement = await Achievement.create(achievement_details, {
            transaction: t
          });
          if (members !== null) {
            await new_achievement.addMembers(members, { transaction: t });
          }
          renameSync(
            temporaryPathname + '/' + req.file.originalname,
            pathname + '/' + req.file.originalname
          );
          rmdirSync(temporaryPathname);
          logger.info(
            `Achievement ${new_achievement.name_of_event} created, id: ${new_achievement.id}`
          );
          res.status(201).send('Achievement Added');
        });
      } catch (err) {
        logger.error(`Error(Achievement Creation): ${err}`);
        await rm(temporaryPathname, { recursive: true, force: true }, (err) => {
          err ? logger.error(err) : null;
        });
        res.status(500).send('Internal Server/Database Error!');
      }
    }
  });
});

router.put('/update/:id', async (req, res) => {
  let achievement_id = parseInt(req.params.id);
  const achievement_detail = await Achievement.findByPk(achievement_id);
  if (!achievement_detail) {
    return res.status(403).send('Achievement not found');
  }
  imageHandler(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      logger.error(err);
      return res.status(400).send(err);
    } else if (err) {
      logger.error(err);
      return res.status(400).send('File type is not jpg/jpeg/png');
    } else {
      console.log(req.body, req.file);
      if (req.files) {
        logger.error('More than 1 file sent');
        res.status(400).send('Send only 1 image file');
      }
      let temporaryPathname = path.resolve('./', 'temp/achievements/');
      let pathname = path.resolve('./', 'public/achievements/');
      if (!existsSync(pathname)) {
        mkdirSync(pathname, { recursive: true });
      }
      let members_added = req.body['members_added'];
      let members_removed = req.body['members_removed'];
      delete req.body['members_added'];
      delete req.body['members_removed'];
      let update_data = req.body;

      try {
        const result = await sequelize.transaction(async (t) => {
          await Achievement.update(update_data, {
            where: {
              id: achievement_id
            },
            transaction: t
          });
          if (members_added && achievement_detail) {
            achievement_detail.addMembers(members_added, { transaction: t });
          }
          if (members_removed && achievement_detail) {
            achievement_detail.removeMembers(members_removed, {
              transaction: t
            });
          }
        });
        if (req.file) {
          await unlinkSync(achievement_detail['achievement_photo_url']);
          update_data['achievement_photo_url'] =
            pathname + '/' + req.file.originalname;
          renameSync(
            temporaryPathname + '/' + req.file.originalname,
            pathname + '/' + req.file.originalname
          );
          rmdirSync(temporaryPathname);
        }
        logger.info('Achievement updation done');
        res.status(201).send('Achievement updation done');
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
  let achievement_id: number = parseInt(req.params.id);
  let achievement = await Achievement.findByPk(achievement_id);
  if (!achievement) {
    res.status(403).send("Achievement doesn't exist");
  } else {
    try {
      await Achievement.destroy({
        where: {
          id: achievement_id
        }
      });
      await rm(
        achievement.achievement_photo_url,
        { recursive: true, force: true },
        (err) => {
          err ? logger.error(err) : null;
        }
      );
      logger.info('Achievement deleted');
      res.status(200).send('Achievement deleted');
    } catch (err) {
      logger.error(`${err}`);
      res.status(500).send('Internal Server/Database Error!');
    }
  }
});
*/
export { router };
