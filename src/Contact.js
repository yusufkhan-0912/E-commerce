import React from "react";

const Contact = () => {
  return (
    <div className="wrapper flex max-w-full	flex-col items-center	">
      <h2 className="text-2xl font-medium mb-10">Contact Page</h2>
      <div className="flex flex-col items-center mt-16 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7531.41027959415!2d72.85112943790052!3d19.29518474086161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b19c562b3b19%3A0x6a03f8b31cdd7995!2sMaxus%20Mall!5e0!3m2!1sen!2sin!4v1703859727446!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container">
        <div className="contactform">
          <form
            action="https://formspree.io/f/xbjnjlqr"
            method="POST"
            className="flex flex-col justify-center items-center gap-6 mt-12 text-lg"
          >
            <input
              className="w-3/6 h-14 border-solid border-2 border-black-400 p-4 shadow-md"
              type="text"
              placeholder="Enter Your Username"
              name="Username"
              required
              autoComplete="off"
            ></input>
            <input
              className="w-3/6 h-14 border-solid border-2 border-black-400 p-4 shadow-md"
              type="Email"
              placeholder="Enter your Email"
              name="Email"
              required
              autoComplete="off"
            ></input>

            <textarea
              className="w-3/6 h-40 border-solid border-2 border-black-400 p-4 shadow-md"
              name="Message"
              cols="row"
              placeholder="Enter Your Meassage"
              autoComplete="off"
              required
            ></textarea>

            <input
              class="bg-blue-700 text-white rounded-lg py-4 px-16  border-none transition-all duration-300 ease-in hover:bg-blue-300 transform scale-96"
              type="submit"
              value="SEND"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
