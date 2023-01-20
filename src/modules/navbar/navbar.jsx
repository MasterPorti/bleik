import React, { useState } from "react";
import "./navbar.scss";
import icon from "../../assets/bleik.svg";
function Navbar(props) {
  return (
    <nav>
      <div className="icon">
        <img src={icon} className="logo" />
      </div>
      <section className="sectionButtons">
        <Button name="home" status={true} />
        <Button name="chat" status={false} />
        <Button name="profile" status={false} />
        <Button name="trending" status={false} />
      </section>
    </nav>
  );
}

function Button({ name, status }) {
  return (
    <button className={status ? "active" : "inactive"}>
      <img
        src={`/src/assets/${name}-${status ? "active" : "inactive"}.svg`}
        className="iconButton"
        id="home"
      />
    </button>
  );
}

export default Navbar;
