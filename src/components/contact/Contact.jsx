// src/components/Contact.jsx
import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSvg";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const ref = useRef(null);
  const form = useRef(null);

  const isInView = useInView(ref, { margin: "-200px" });

  const sendEmail = (e) => {
    e.preventDefault();

    setSuccess(false);
    setError(false);

    // Optional: log envs in dev to be sure they are loaded
    console.log("SERVICE_ID:", import.meta.env.VITE_SERVICE_ID);
    console.log("TEMPLATE_ID:", import.meta.env.VITE_TEMPLATE_ID);
    console.log("PUBLIC_KEY:", import.meta.env.VITE_PUBLIC_KEY);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("Email sent successfully");
          setSuccess(true);
          setError(false);
          // clear form after success
          form.current.reset();
        },
        (err) => {
          console.error("Error sending email:", err);
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="contact" ref={ref}>
      <div className="cSection">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
        >
          <motion.h1 variants={listVariant} className="cTitle">
            Let&apos;s keep in touch
          </motion.h1>

          <motion.div variants={listVariant} className="formItem">
            <label>Name</label>
            <input
              type="text"
              name="user_username"     // must match EmailJS template
              placeholder="Chetan Nanda"
              required
            />
          </motion.div>

          <motion.div variants={listVariant} className="formItem">
            <label>Email</label>
            <input
              type="email"
              name="user_email"        // must match EmailJS template
              placeholder="chetan@gmail.com"
              required
            />
          </motion.div>

          <motion.div variants={listVariant} className="formItem">
            <label>Message</label>
            <textarea
              rows={10}
              name="user_message"      // must match EmailJS template
              placeholder="Write your message..."
              required
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            variants={listVariant}
            className="formButton"
          >
            Send
          </motion.button>

          {success && <span className="successMsg">Your message has been sent!</span>}
          {error && <span className="errorMsg">Something went wrong. Try again.</span>}
        </motion.form>
      </div>

      <div className="cSection">
        <ContactSvg />
      </div>
    </div>
  );
};

export default Contact;
