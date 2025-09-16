import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <header>
        <div className="container">
          <nav className="d-flex justify-content-between align-items-center">
            <a href="/" title="Homepage">
              <img
                src="/images/ch-logo-teal.png"
                alt="Chardi Logo"
                className="logo"
              />
            </a>
            <ul>
              <li className="active">
                <a href="/" title="Homepage">
                  Home
                </a>
                <span className="slashes">//</span>
              </li>
              <li>
                <a href="/about" title="About">
                  About
                </a>
                <span className="slashes">//</span>
              </li>
              <li>
                <a href="/work" title="Work">
                  Work
                </a>
                <span className="slashes">//</span>
              </li>
              <li>
                <a href="/contact" title="Contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container hero-content-container">
        <div className="hero-content">
          <h3 className="text-center blur">Greetings from Manchester!</h3>
          <h1 className="text-center blur">CLARE HARDING</h1>
          <h3 className="text-center blur">Front-end Developer</h3>
          <div className="mt-5">
            <a
              href="/contact"
              title="Contact"
              className="primary-button shadow"
            >
              Let's collaborate!
            </a>
          </div>
          <div>
            <a href="#skills">
              <i className="fa-solid fa-arrow-down arrow-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
