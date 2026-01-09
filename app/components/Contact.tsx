import React from 'react';

const Contact = () => (
  <section className="py-16 px-4 bg-green-100" id="contact">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="mb-6">Ready to start your green construction project? Reach out today!</p>
      <form className="space-y-4" method="POST" action="#">
        <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded border border-gray-300" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded border border-gray-300" />
        <textarea name="message" placeholder="Your Message" required className="w-full p-3 rounded border border-gray-300" rows={4}></textarea>
        <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded font-semibold hover:bg-green-800 transition">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;
