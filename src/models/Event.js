
import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  attendees: [{ type: String}],
  email:[{type: String}],
  age:[{type: Number}],
  reminderSent: { type: Boolean, default: false },
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);
export default Event;
