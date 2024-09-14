
import express from 'express';
import { createEvent, getEvents, getEventById, deleteEvent } from '../controllers/eventController.js';
import { message } from '../controllers/message.js';

const router = express.Router();

router.route('/').post(createEvent).get(getEvents);
router.route('/:id').get(getEventById).delete(deleteEvent);
router.route("/reminder/:id").get(message);


export default router;
