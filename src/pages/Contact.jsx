import React, { useState } from "react";
import Navbar from "../components/common/Navbar";

function Contact() {
  const [formState, setFormState] = useState({
    email: "",
    subject: "",
    message: ""
  });

  function submitForm(e) {
    e.preventDefault();

    // const formData = {
    //   email: e.target.email.value,
    //   subject: e.target.subject.value,
    //   message: e.target.message.value
    // };

    fetch("url", {
      method: "POST",
      body: JSON.stringify(formState),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log("e.target.name", e.target.name);
    console.log("e.target.value", e.target.value);
  }

  return (
    <div style={{ padding: "32px" }}>
      <h2 style={{ marginBottom: "16px" }}>Contact Page</h2>
      <p style={{ marginBottom: "32px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        similique.
      </p>

      <form
        // action="#"
        // method="post"
        onSubmit={submitForm}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "4px", marginTop: "4px" }}
          />
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <br />
          <input
            id="subject"
            name="subject"
            type="text"
            value={formState.subject}
            onChange={handleChange}
            style={{ width: "100%", padding: "4px", marginTop: "4px" }}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formState.message}
            onChange={handleChange}
            style={{ width: "100%", padding: "4px", marginTop: "4px" }}
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
