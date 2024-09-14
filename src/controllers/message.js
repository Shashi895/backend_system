// routes/events.js

import Event from "../models/Event.js";



// Route to send reminders and update the reminderSent field
export const message = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) return res.status(404).send("Event not found");

    if (event.reminderSent) {
      return res.status(400).json({ message: "Reminder already sent" });
    }

    // Simulate sending reminder (In real-world, use an email or SMS service)
    console.log(`Sending reminder for event: ${event.title}`);

    // Update the reminderSent field after the reminder is sent
    event.reminderSent = true;
    await event.save();

    res.json({ message: "Reminder sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
