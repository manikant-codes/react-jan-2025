import React from "react";
import Navbar from "../components/common/Navbar";

function Contact() {

  function submitForm(e) {
    e.preventDefault();

    const formData = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    };

    console.log(formData);

    fetch("url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
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
            style={{ width: "100%", padding: "4px", marginTop: "4px" }}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            id="message"
            name="message"
            type="text"
            rows="6"
            style={{ width: "100%", padding: "4px", marginTop: "4px" }}
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
