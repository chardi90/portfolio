import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <Header currentPage="contact" />
      <div className="content-container container">
        <div className="content">
          <h1 className="mb-5 text-center">Contact</h1>
          <p className="mb-5 text-center">Let's collaborate!</p>
          <div className="contact container">
            <form
              action="https://formsubmit.co/45b692f84adc63e81ae8b0d16a94598c"
              method="POST"
              target="_blank"
              className="contact-form shadow"
            >
              <label htmlFor="name">Name:</label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="contact-inputs"
                required
              />
              <label htmlFor="email">Email:</label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@email.com"
                className="contact-inputs"
                required
              />
              <label htmlFor="message">Message:</label>
              <br />
              <textarea
                id="message"
                name="message"
                rows={6}
                cols={40}
                required
              ></textarea>
              <br />
              <br />
              <input
                type="submit"
                value="Send"
                className="btn primary-button shadow"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
