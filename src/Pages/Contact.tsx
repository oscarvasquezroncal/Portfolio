import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen bg-background flex flex-col justify-center items-center px-8">
      <h2 className="text-4xl font-bold text-textDark mb-6">Let's Get in Touch</h2>
      <p className="text-lg text-textSecondary mb-8 text-center max-w-lg">
        If you’re interested in working together or have any questions, feel free to reach out through the form below or send me an email.
      </p>
      <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-textDark font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Your full name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-textDark font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Your email address"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-textDark font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-accent text-white font-semibold py-3 rounded-lg hover:bg-textDark transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
