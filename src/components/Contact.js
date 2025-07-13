import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen px-8 py-6 bg-white text-black dark:bg-[#121212] dark:text-white transition-all duration-300">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">📞 Contact Us</h1>
        <p className="mb-8">Have questions or feedback? We'd love to hear from you!</p>

        <form className="space-y-6">
          <div>
            <label className="block mb-1">Your Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1e1e1e] text-black dark:text-white"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1e1e1e] text-black dark:text-white"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1">Your Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1e1e1e] text-black dark:text-white"
              placeholder="Type your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
