import { useState } from "react";
import { Link } from "react-router-dom";

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <div style={{ display: "flex" }}>
            <span>{item.icon && <i className={item.icon}></i>}</span>
            <h5>{item.title}</h5>
          </div>
          <i
            className="bi-chevron-down toggle-btn"
            onClick={() => setOpen(!open)}
          ></i>
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <Link to={item.path || "#"} className="sidebar-item plain">
        <a herf={item.path || "#"}>
          <div className="sidebar-title">
            <div style={{ display: "flex" }}>
              <span>{item.icon && <i className={item.icon}></i>}</span>
              <h5>{item.title}</h5>
            </div>
          </div>
        </a>
      </Link>
    );
  }
}
