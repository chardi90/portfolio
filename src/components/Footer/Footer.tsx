import React from "react";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/clare-harding-chardi/",
      title: "LinkedIn",
      icon: "fab fa-linkedin",
      external: true,
    },
    {
      href: "/contact",
      title: "Email",
      icon: "fa-solid fa-at",
      external: false,
    },
    {
      href: "https://github.com/chardi90/",
      title: "GitHub",
      icon: "fab fa-github",
      external: true,
    },
  ];

  return (
    <footer>
      <div>
        <div className="text-center mt-3">
          <p>Coded by Chardi,</p>
          <p>
            Opensourced on{" "}
            <a
              href="https://github.com/chardi90/portfolio/"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              GitHub
            </a>{" "}
            & Hosted on{" "}
            <a
              href="https://chardi-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
              title="Netlify"
            >
              Netlify
            </a>
            .
          </p>
        </div>
      </div>
      <div className="social-links d-flex justify-content-center m-3">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            {...(link.external && {
              target: "_blank",
              rel: "noreferrer",
            })}
            title={link.title}
            className="shadow"
          >
            <i className={link.icon}></i>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
