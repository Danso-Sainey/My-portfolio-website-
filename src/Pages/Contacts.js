import React from "react";

function Contacts() {
  return (
    <section className="content-section">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit" className="btn">Send</button>
      </form>

      <div className="socials">
        <a href="mailto:saineydanso@gmail.com">Email</a> |
        <a href="https://github.com/"> GitHub</a> |
        <a href="https://linkedin.com/"> LinkedIn</a>
      </div>
    </section>
  );
}

export default Contacts;
