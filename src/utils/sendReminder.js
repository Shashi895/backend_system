
import Event from '../models/Event.js';

export const sendReminder = async () => {
  const events = await Event.find({ reminderSent: false });
  
  events.forEach(event => {
    // Logic for sending reminders (via email or other methods)
    console.log(`Sending reminder for event: ${event.title}`);
    event.reminderSent = true;
    event.save();
  });
};
