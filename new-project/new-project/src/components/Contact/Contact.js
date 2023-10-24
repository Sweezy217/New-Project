import "./Contact.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FaxIcon from "@mui/icons-material/Fax";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .sendForm(
        "service_luu4pzi",
        "template_zol662n",
        form.current,
        "l4n8ekXi_xpLwKqat"
      )
      .then(
        (result) => {
          setLoading(false);
        },
        (error) => {
          alert(error.message);
          setLoading(false);
        }
      );
  };
  return (
    <>
      <div className="contact" id="contact">
        <h4>Contact Us</h4>
        <h5>Let's get In Touch</h5>
        <div className="info">
          <div>
            <CallIcon style={{ fontSize: "33px" }} />
            <span>Tel:</span>
            <p>011 435 2719</p>
          </div>
          <div>
            <EmailIcon style={{ fontSize: "33px" }} />
            <span>Email:</span>
            <p>smch21@.com</p>
          </div>
          <div>
            <FaxIcon style={{ fontSize: "33px" }} />
            <span>Fax:</span>
            <p>011 435 0010</p>
          </div>
        </div>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Name"
            name="user_name"
            title={"Please fill in Name."}
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
          />
          <textarea
            name="message"
            min="10"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <button>{loading ? "SENDING" : "SEND MESSAGE"}</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
