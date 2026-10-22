import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const errors = {
    name: form.name.trim() ? "" : "Name is required.",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? "" : "Enter a valid email address.",
    message: form.message.trim().length >= 10 ? "" : "Message must be at least 10 characters."
  };
  const valid = Object.values(errors).every((e) => e === "");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valid) return;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="card">
      <h2>Contact Us</h2>
      <p className="center">Questions about the fair? Send us a message.</p>
      <form onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="c-name">Name</label>
          <input id="c-name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
          {form.name && errors.name && <small>{errors.name}</small>}
        </div>
        <div className="field">
          <label htmlFor="c-email">Email</label>
          <input id="c-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your email" />
          {form.email && errors.email && <small>{errors.email}</small>}
        </div>
        <div className="field">
          <label htmlFor="c-message">Message</label>
          <textarea id="c-message" name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Type your message" />
          {form.message && errors.message && <small>{errors.message}</small>}
        </div>
        <button type="submit" disabled={!valid}>Send Message</button>
        {sent && <p className="success" role="status">Message sent. We will reply soon!</p>}
      </form>
    </div>
  );
}

export default Contact;
