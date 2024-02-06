import React, { useState } from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";
import colorConstants from "../Content/Color.json";

const CustomNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <BootstrapNavbar
      style={{ backgroundColor: colorConstants.BackgroundColor }}
      expand="lg"
    >
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src="https://prodigyinfotech.dev/assets/images/logo/logo.svg"
            alt="Logo"
            className="navbar-brand"
          />
        </div>
        <div>
          <NavbarToggler onClick={toggleMobileMenu} />
          <Collapse isOpen={isMobileMenuOpen} navbar>
            <Nav  navbar>
              <NavItem>
                <Link
                  to="/home"
                  className="nav-link text-white fs-5 fw-light mx-md-3"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/about"
                  className="nav-link text-white fs-5 fw-light mx-md-3"
                  onClick={toggleMobileMenu}
                >
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/internship"
                  className="nav-link text-white fs-5 fw-light mx-md-3"
                  onClick={toggleMobileMenu}
                >
                  Internship
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/faqs"
                  className="nav-link text-white fs-5 fw-light mx-md-3"
                  onClick={toggleMobileMenu}
                >
                  FAQs
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/contact"
                  className="nav-link text-white fs-5 fw-light mx-md-3"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/verify"
                  className="nav-link text-white fw-light fs-5 mx-md-3"
                  onClick={toggleMobileMenu}
                >
                  Verify
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </div>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
