import React, { useState } from "react";
import { ThemeBTN, NavList, BurgerBTN } from "./components";
import { Nav } from "./components/Navigation.styled";
import { InviteBTN, Logo } from "../Layouts";

const Navigation: React.FC = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <Nav navIsOpen={navIsOpen}>
      <Logo />
      <NavList handleNav={() => setNavIsOpen(false)} />
      <InviteBTN />
      <ThemeBTN />
      <BurgerBTN
        navIsOpen={navIsOpen}
        handleNav={() => setNavIsOpen((prev) => !prev)}
      />
    </Nav>
  );
};

export default Navigation;
