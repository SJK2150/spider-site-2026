/*
import { Router } from 'express';
import { Userlogin, UserloginAttributes } from '../database/database';
import pino from 'pino';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const logger = pino({
  level: 'info',
  prettyPrint: process.env.ENV === 'DEV'
});
let router = Router();

router.post('/', async (req, res) => {
  try {
    const user_details = await Userlogin.findOne({
      where: {
        username: req.body.username
      }
    });
    if (!user_details) {
      res.status(403).send('User does not exist!');
    } else {
      if (!bcrypt.compareSync(req.body.password, user_details.password)) {
        res.status(401).send('Invalid password!');
      } else {
        const token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
            data: { username: req.body.username }
          },
          process.env.JWT_SECRET || 'key'
        );
        res.status(200).json({ message: 'Success', token });
      }
    }
  } catch (err) {
    logger.error(`${err}`);
    res.status(500).send('Internal Server/Database Error!');
  }
});

router.post('/register', async (req, res) => {
  try {
    const user_check = await Userlogin.findOne({
      where: {
        username: req.body.username
      }
    });
    if (user_check) {
      res.status(403).send('User already exists!');
    } else {
      let salt = bcrypt.genSaltSync(10);
      let hashed_password = bcrypt.hashSync(req.body.password, salt);
      let new_user = await Userlogin.create({
        username: req.body.username,
        password: hashed_password
      });
      logger.info(`New user ${new_user.username} created`);
      res.status(201).send('User created');
    }
  } catch (err) {
    logger.error(`${err}`);
    res.status(500).send('Internal Server/Database Error!');
  }
});

export { router };
*/