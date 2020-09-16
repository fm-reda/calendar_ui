import React from "react";
import logo from "./../../src/startup-logo.png";

const Header = () => {
  return (
    <div className="flex-sp-c header">
      <img src={logo} className="p-l-24" />
      <div className="user flex-c-c p-r-33">
        <div className="px-12">
          <div className="user-name">Ossama Zaid</div>
          <div className="user-role">Role: Manager</div>
        </div>
        <div className="avatar"></div>
      </div>
    </div>
  );
};

export default Header;
