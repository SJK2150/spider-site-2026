import { Router } from 'express';
import { Member } from '../database/database';
import { existsSync, mkdirSync, unlinkSync } from 'fs';
import pino from 'pino';
import multer from 'multer';
import path from 'path';
import { jwt_verify } from '../utils/middleware';
/*
const imageHandler = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // cb(null, path.resolve(__dirname, '../../public/members'));
      let pathname = path.resolve(__dirname, '../../public/members');
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
}).single('member');
*/
const logger = pino({
  level: 'info',
  prettyPrint: process.env.ENV === 'DEV'
});
let router = Router();

router.get('/details', async (req, res) => {
  try {
    var hardware : {[index: string]:{ [index: number]:Member []}} = {"BTECH":{1:[],2:[],3:[],4:[]},"MTECH":{1:[],2:[],3:[],4:[]}}
    var software : {[index: string]:{ [index: number]:Member []}} = {"BTECH":{1:[],2:[],3:[],4:[]},"MTECH":{1:[],2:[],3:[],4:[]}}
    const member_details = await Member.findAll();
    member_details.forEach((member)=>{
      if(member.domain==="TRONIX"){
        hardware[member.degree][member.year].push(member)
      } else {
        software[member.degree][member.year].push(member)
      }
    })
    res.status(200).json({"hardware":hardware,"software":software});
  } catch (err) {
    logger.error(`${err}`);
    res.status(500).send('Internal Server/Database Error!');
  }
});

router.get('/details/:id', async (req, res) => {
  const member_id = req.params.id;
  try {
    const member_detail = await Member.findOne({
      where: {
        id: member_id
      }
    });
    res.status(200).json(member_detail);
  } catch (err) {
    logger.error(`${err}`);
    res.status(500).send('Internal Server/Database Error!');
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
      logger.error('0 or more than 1 files sent');
      res.status(400).send('Send only 1 image file');
    } else {
      try {
        const member_details = req.body;
        member_details.photo_url = req.file.path;
        let new_member = await Member.create(member_details);
        logger.info(`Member ${new_member.name} created, id: ${new_member.id}, photo_url: ${new_member.photo_url}`);
        res.status(201).send('Member added');
      } catch (err) {
        await unlinkSync(req.file.path);
        logger.error(`${err}`);
        res.status(500).send('Internal Server/Database Error!');
      }
    }
  });
});

interface MemberUpdation {
  name?: string;
  photo_url?: string;
  year?: number;
  degree?: string;
  domain?: string;
  linkedin_url?: string;
  github_url?: string;
  website_url?: string;
}
router.put('/update/:id', async (req, res) => {
  let member_id: number = parseInt(req.params.id);
  const member_detail = await Member.findOne({
    where: {
      id: member_id
    }
  });
  if (!member_detail) {
    return res.status(403).send('No such member exists');
  }

  imageHandler(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      logger.error(err);
      return res.status(400).send(err);
    } else if (err) {
      logger.error(err);
      return res.status(400).send('File type is not jpg/jpeg/png');
    } else if (!req.file) {
      try {
        let update_data: MemberUpdation = req.body;
        await Member.update(update_data, {
          where: {
            id: member_id
          }
        });
        logger.info(`Member ${member_id} Updation Done`);
        return res.status(201).send(`Member ${member_id} Updation Done`);
      } catch (err) {
        logger.error(`${err}`);
        return res.status(500).send('Internal Server/Database Error!');
      }
    } else {
      let update_data: MemberUpdation = req.body;
      try {
        if (member_detail.photo_url) {
          await unlinkSync(member_detail.photo_url);
        }
        update_data.photo_url = req.file.path;
        await Member.update(update_data, {
          where: {
            id: member_id
          }
        });
        logger.info(`Member ${member_id} Updation Done`);
        return res.status(201).send(`Member ${member_id} Updation Done`);
      } catch (err) {
        logger.error(`${err}`);
        return res.status(500).send('Internal Server/Database Error!');
      }
    }
  });
});

router.delete('/delete/:id', async (req, res) => {
  let member_id: number = parseInt(req.params.id);
  let member = await Member.findByPk(member_id);
  if (!member) {
    logger.error("Member Doesn't exist");
    res.status(403).send("Member Doesn't exist");
  } else {
    try {
      await Member.destroy({
        where: {
          id: member_id
        }
      });
      await unlinkSync(member.photo_url);
      logger.info(`Member ${member_id} got deleted`);
      res.status(200).send('deleted');
    } catch (err) {
      logger.error(`${err}`);
      res.status(500).send('Internal Server/Database Error!');
    }
  }
});
*/
export { router };
