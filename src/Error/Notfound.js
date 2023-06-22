import React, { useContext } from "react";
import { SideMenu } from "../App";

function Notfound() {
  const menu = useContext(SideMenu);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        className="flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <img src="/../images/404error.jpg" style={{ height: "60vh" }} />
        <h2>hello</h2>
      </div>
    </div>
  );
}

export default Notfound;
