import React from "react";
import { FooterContainer } from "./Footer.styled";
import Socials from "./Socials";
import { Logo, InviteBTN } from "../Layouts";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="logo-and-socials">
        <Logo />
        <Socials />
      </div>
      <nav className="nav-lists">
        <ul className="nav-lists__list">
          <li>about us</li>
          <li>contact</li>
          <li>blog</li>
        </ul>
        <ul className="nav-lists__list">
          <li>careers</li>
          <li>support</li>
          <li>privacy policy</li>
        </ul>
      </nav>
      <div className="invite-and-copy">
        <InviteBTN />
        <p className="copy">&copy; Easybank. All Rights Reserved.</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
