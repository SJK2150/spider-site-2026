import { Router } from 'express';
import {
  sequelize,
  Project,
  Member,
  ProjectAttributes
} from '../database/database';
import pino from 'pino';
const logger = pino({
  level: 'info',
  prettyPrint: process.env.ENV === 'DEV'
});

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

router.post('/add', async (req, res) => {
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
    const result = await sequelize.transaction(async (t) => {
      let new_project = await Project.create(project_details, {
        transaction: t
      });
      if (members !== null) {
        new_project.addMembers(members, { transaction: t });
      }
      logger.info(`Project ${new_project.name} created, id: ${new_project.id}`);
      res.status(201).send('Project Added');
    });
  } catch (err) {
    logger.error(`Error(Project Creation): ${err}`);
    res.status(500).send('Internal Server/Database Error!');
  }
});

interface ProjectUpdation {
  name?: string;
  desc?: string;
  domain?: string;
  dp_url?: string;
  project_url?: string;
  project_video_url?: string;
}

router.put('/update/:id', async (req, res) => {
  let project_id: number = parseInt(req.params.id);
  let members_added = req.body['members_added'];
  let members_removed = req.body['members_removed'];
  delete req.body.members_added;
  delete req.body.members_removed;
  let update_data: ProjectUpdation = req.body;

  try {
    const result = await sequelize.transaction(async (t) => {
      await Project.update(update_data, {
        where: {
          id: project_id
        },
        transaction: t
      });

      let project = await Project.findByPk(project_id, { transaction: t });

      if (members_added !== null && project !== null) {
        project.addMembers(members_added, { transaction: t });
      }
      if (members_removed !== null && project !== null) {
        project.removeMembers(members_removed, { transaction: t });
      }
    });
    logger.info('Project Updation Done');
    res.status(201).send('Project Updation Done');
  } catch (err) {
    logger.error(`${err}`);
    res.status(500).send('Internal Server/Database Error!');
  }
});

router.delete('/delete/:id', async (req, res) => {
  let project_id: number = parseInt(req.params.id);
  try {
    await Project.destroy({
      where: {
        id: project_id
      }
    });
    logger.info('Project Deleted');
    res.status(200).send('Project Deleted');
  } catch (err) {
    logger.error(`${err}`);
    res.status(500).send('Internal Server/Database Error!');
  }
});

export { router };
