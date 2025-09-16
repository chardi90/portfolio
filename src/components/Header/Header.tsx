import React from "react";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  currentPage?: "home" | "about" | "work" | "contact";
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const navItems = [
    { path: "/", label: "Home", key: "home" },
    { path: "/about", label: "About", key: "about" },
    { path: "/work", label: "Work", key: "work" },
    { path: "/contact", label: "Contact", key: "contact" },
  ];

  return (
    <header className="subpages">
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
            {navItems.map((item, index) => (
              <li
                key={item.key}
                className={currentPage === item.key ? "active" : ""}
              >
                <NavLink to={item.path} title={item.label}>
                  {item.label}
                </NavLink>
                {index < navItems.length - 1 && (
                  <span className="slashes">{"//"}</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
