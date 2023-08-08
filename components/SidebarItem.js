import React from "react";

const SidebarItem = ({ icon, name, bar }) => {
  return (
    <li className={`sidebar-item ${bar ? "bar" : ""}`}>
      {icon}
      <h2>{name}</h2>
    </li>
  );
};

export default SidebarItem;
