import React, { useContext } from "react";
import { SideMenu } from "../App";
import { Outlet } from "react-router-dom";

function Layout() {
  const menu = useContext(SideMenu);
  return (
    <div
      className="grid grid-nogutter"
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="flex col-12"
        style={{
          justifyContent: "space-between",
          padding: "10px",
          height: "10%",
        }}
      >
        <span
          class="bi bi-list"
          style={{
            fontSize: "35px",
            padding: "10px",
            color: "black",
          }}
          onClick={() => {
            menu.setshowSidebar(!menu.showSidebar);
            console.log(menu.showSidebar);
          }}
        ></span>
        <span
          style={{
            fontSize: "35px",
            padding: "10px",
            color: "black",
          }}
          class="bi bi-person-circle"
        ></span>
      </div>

      <div className="col-12" style={{ height: "90%" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
