import { useState } from "react";
import headerLogo from "/src/assets/images/logo.svg";
function Navbar({ setDdlUnit }) {
  return (
    <>
      {" "}
      <a href="#main" class="visually-hidden skip-link">
        Skip to main content
      </a>
      <header className="header wrapper">
        <div className="header__content">
          <a className="header__homelink" href="/">
            <img
              className={"header__logo"}
              src={headerLogo}
              alt="Weather Now Home"
              width="197"
              height="40"
            />
          </a>

          <select
            className="dropdown header__dropdown"
            name="units"
            id="ddlUnits"
            onChange={(e) => setDdlUnit(e.target.value)}
          >
            <option value="">Units</option>
            <option value="C">&deg;C</option>
            <option value="F">&deg;F</option>
          </select>
        </div>
      </header>
    </>
  );
}

export default Navbar;
