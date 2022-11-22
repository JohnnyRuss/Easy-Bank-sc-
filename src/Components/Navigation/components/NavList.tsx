import React from "react";

interface NavListType {
  handleNav: () => void;
}

const NavList: React.FC<NavListType> = ({ handleNav }) => {
  return (
    <div className="nav-list-wrapper">
      <ul className="nav-list">
        {["home", "about", "contact", "blog", "careers"].map((item) => (
          <li onClick={handleNav} key={`main-nav-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavList;
