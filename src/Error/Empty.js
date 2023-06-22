import React from "react";

function Empty() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        className="flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <img src="../images/empty.jpg" style={{ height: "50vh" }} />
      </div>
    </div>
  );
}

export default Empty;
