import React from "react";
import Navbar from "../components/common/Navbar";

function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        similique.
      </p>

      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" type="text"></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
