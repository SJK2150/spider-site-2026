import { Router } from 'express';
import { Blog, BlogAttributes , sequelize} from '../database/database';
import {
    existsSync,
    mkdirSync,
    rm,
    unlinkSync,
    readdirSync,
    renameSync,
    rmdirSync
  } from 'fs';
import pino from 'pino';
import multer from 'multer';
import path from 'path';
import { jwt_verify } from '../utils/middleware';

const logger = pino({
  level: 'info',
  prettyPrint: process.env.ENV === 'DEV'
});
let router = Router();

const imageHandler = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        let pathname = path.resolve('./', 'temp/blogs');
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
}).single('image');

router.get('/details', async (req, res) => {
  try {
    let blog_details = await Blog.findAll();
    res.status(200).json(blog_details);
  } catch (err) {
    logger.error(`${err}`);
    res.status(500).send('Internal Server/Database Error!');
  }
});

router.get('/details/:id', async (req, res) => {
  const blog_id = req.params.id;
  try {
    const blog_detail = await Blog.findOne({
      where: {
        id: blog_id
      }
    });
    res.status(200).json(blog_detail);
  } catch (err) {
    logger.error(`${err}`);
    res.status(500).send('Internal Server/Database Error!');
  }
});

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
        let temporaryPathname = path.resolve('./', 'temp/blogs/');
        let pathname = path.resolve('./', 'public/blogs/');
        if (!existsSync(pathname)) {
          mkdirSync(pathname, { recursive: true });
        }
        const blog_details: BlogAttributes = req.body;
        console.log(req.body);
        try {
          blog_details['image_link'] =
            pathname + '/' + req.file.originalname;
          return await sequelize.transaction(async (t) => {
            let new_blog = await Blog.create(blog_details, {
              transaction: t
            });
            
            renameSync(
              temporaryPathname + '/' + req.file.originalname,
              pathname + '/' + req.file.originalname
            );
            rmdirSync(temporaryPathname);
            logger.info(
              `New blog created, id: ${new_blog.id}`
            );
            res.status(201).send('Blog Added');
          });
        } catch (err) {
          logger.error(`Error(Blog Creation): ${err}`);
          await rm(temporaryPathname, { recursive: true, force: true }, (err) => {
            err ? logger.error(err) : null;
          });
          res.status(500).send('Internal Server/Database Error!');
        }
      }
    });
  });
  
  

export { router };
