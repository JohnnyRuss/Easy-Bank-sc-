import React, { useContext } from "react";
import { ThemeContext, ThemeMode } from "../../../Theme";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeBTN: React.FC = () => {
  const { mode, changeTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() =>
        changeTheme(mode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT)
      }
      className="theme-btn"
    >
      {mode === ThemeMode.DARK ? (
        <BsFillSunFill />
      ) : mode === ThemeMode.LIGHT ? (
        <BsFillMoonFill />
      ) : (
        "Theme"
      )}
    </button>
  );
};

export default ThemeBTN;
