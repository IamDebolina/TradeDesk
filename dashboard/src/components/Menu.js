import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "./UserContext";
import { BACKEND_URL, LOGIN_URL } from "../config";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const username = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await axios.post(`${BACKEND_URL}/logout`, {}, { withCredentials: true });
    } catch (err) {
      console.error("Logout failed:", err);
    }
    window.location.href = LOGIN_URL;
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  const initials = username ? username.slice(0, 2).toUpperCase() : "";

  const menuItems = [
    { label: "Dashboard", path: "/" },
    { label: "Orders", path: "/orders" },
    { label: "Holdings", path: "/holdings" },
    { label: "Positions", path: "/positions" },
    { label: "Funds", path: "/funds" },
    { label: "Apps", path: "/apps" },
  ];

  return (
    <div className="menu-container">
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          {menuItems.map((item, index) => (
            <li key={item.path}>
              <Link style={{ textDecoration: "none" }} to={item.path}
                onClick={() => setSelectedMenu(index)}>
                <p className={selectedMenu === index ? activeMenuClass : menuClass}>
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <div style={{ position: "relative" }}>
          <div className="profile" onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
            <div className="avatar">{initials}</div>
            <p className="username">{username}</p>
          </div>

          {isProfileDropdownOpen && (
            <div style={{
              position: "absolute", right: 0, top: "100%", background: "#fff",
              border: "1px solid #ddd", borderRadius: "4px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)", zIndex: 10,
            }}>
              <button onClick={handleLogout} style={{
                border: "none", background: "none", padding: "10px 20px",
                cursor: "pointer", color: "#df514c",
              }}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;