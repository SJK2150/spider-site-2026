import { Router } from 'express';
import { Event, EventAttributes, table_sync } from '../database/database';
import pino from 'pino';
import { jwt_verify } from '../utils/middleware';

const logger = pino({
  level: 'info',
  prettyPrint: process.env.ENV === 'DEV'
});
let router = Router();

router.get('/details', async (req, res) => {
  try {
    let event_details = await Event.findAll();
    res.status(200).json(event_details);
  } catch (err) {
    logger.error(`${err}`);
    res.status(500).send('Internal Server/Database Error!');
  }
});

router.get('/details/:id', async (req, res) => {
  const event_id = req.params.id;
  try {
    const event_detail = await Event.findOne({
      where: {
        id: event_id
      }
    });
    res.status(200).json(event_detail);
  } catch (err) {
    logger.error(`${err}`);
    res.status(500).send('Internal Server/Database Error!');
  }
});

router.use('/', jwt_verify);

router.post('/add', async (req, res) => {
  const event_details: EventAttributes = req.body;
  try {
    let new_event = await Event.create(event_details);
    logger.status(`Event ${new_event.name} created, id: ${new_event.id}`);
    logger.info('Event added');
    res.status(201).send('Event added');
  } catch (err) {
    logger.error(`${err}`);
    res.status(500).send('Internal Server/Database Error!');
  }
});

interface EventUpdation {
  name?: string;
  desc?: string;
  eventDate?: Date;
  dp_url?: string;
  event_url?: string;
  event_photo_url?: string;
}
router.put('/update/:id', async (req, res) => {
  let event_id: number = parseInt(req.params.id);
  let update_data: EventUpdation = req.body;
  try {
    await Event.update(update_data, {
      where: {
        id: event_id
      }
    });
    logger.info(`Event ${event_id} Updation Done`);
    res.status(201).send(`Event ${event_id} Updation Done`);
  } catch (err) {
    logger.error(`${err}`);
    res.status(500).send('Internal Server/Database Error!');
  }
});

router.delete('/delete/:id', async (req, res) => {
  let event_id: number = parseInt(req.params.id);
  try {
    await Event.destroy({
      where: {
        id: event_id
      }
    });
    logger.info(`Event ${event_id} got deleted`);
    res.status(200).send('deleted');
  } catch (err) {
    logger.error(`${err}`);
    res.status(500).send('Internal Server/Database Error!');
  }
});

export { router };
