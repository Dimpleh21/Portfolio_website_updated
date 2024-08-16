import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const publicKey1 = "L5WNBB1lj6J-ju3CV";
    emailjs
      .sendForm("service_l7661zx", "template_pt8p1kg", form.current, {
        publicKey: publicKey1,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log(publicKey1);
          setMessageSent(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          console.log(publicKey1);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>harjani.dimps143@gmail.com</h5>
            <a href="mailto:harjani.dimps143@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <CiLinkedin className="contact_option-icon" />
            <h4>Linkedin</h4>

            <a href="https://www.linkedin.com/in/dimple-harjani-652a6925a/">
              Send a message
            </a>
          </article>
        </div>

        <form action="" ref={form} onSubmit={sendEmail} className="forms">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            id="sendername"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            id="#to"
            required
          />
          <textarea
            type="text"
            name="message"
            rows="7"
            placeholder="Your Message"
            id="#user_message"
          ></textarea>
          {messageSent && <p>Message sent successfully!</p>}
          <button type="submit" className="btn btn-primary">
            {messageSent ? "MessageSent!" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
