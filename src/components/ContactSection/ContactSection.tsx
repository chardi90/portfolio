import React from "react";

const ContactSection: React.FC = () => {
  return (
    <>
      <div className="divider"></div>
      <section className="primary-section contact" id="contact">
        <div className="container">
          <h2 className="text-center m-5">CONTACT ME</h2>
          <div className="contact-box d-flex justify-content-between">
            <div className="enquiry">
              <h4>Work Inquiries</h4>
              <p>Interested in working together?</p>
            </div>
            <div>
              <a
                href="/contact"
                title="Contact Chardi"
                className="btn primary-button shadow"
              >
                Let's Collaborate!
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
