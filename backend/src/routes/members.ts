import { Router } from 'express';
import { Member, MemberAttributes } from '../database/database';
import pino from 'pino';
const logger = pino({
  level: 'info',
  prettyPrint: process.env.ENV === 'DEV'
});
let router = Router();

router.get('/details', async (req, res) => {
  try {
    const member_details = await Member.findAll();
    res.status(200).json(member_details);
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

router.post('/add', async (req, res) => {
  const member_details: MemberAttributes = req.body;
  try {
    let new_member = await Member.create(member_details);
    logger.status(`Member ${new_member.name} created, id: ${new_member.id}`);
    logger.info('Member added');
    res.status(201).send('Member added');
  } catch (err) {
    logger.error(`${err}`);
    res.status(500).send('Internal Server/Database Error!');
  }
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
  let update_data: MemberUpdation = req.body;
  try {
    await Member.update(update_data, {
      where: {
        id: member_id
      }
    });
    logger.info('Member Updation Done');
    res.status(201).send('Member Updation Done');
  } catch (err) {
    logger.error(`${err}`);
    res.status(500).send('Internal Server/Database Error!');
  }
});

router.delete('/delete/:id', async (req, res) => {
  let member_id: number = parseInt(req.params.id);
  try {
    await Member.destroy({
      where: {
        id: member_id
      }
    });
    logger.info(`${member_id} got deleted`);
    res.status(200).send('deleted');
  } catch (err) {
    logger.error(`${err}`);
    res.status(500).send('Internal Server/Database Error!');
  }
});

export { router };
