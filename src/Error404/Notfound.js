import React, { useContext } from "react";
import { SideMenu } from "../App";

function Notfound() {
  const menu = useContext(SideMenu);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="flex justify-content-center align-items-center">
        <img src="../404error.jpg" style={{ height: "60vh" }} />
      </div>
    </div>
  );
}

export default Notfound;
