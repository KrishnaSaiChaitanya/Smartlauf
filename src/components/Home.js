import React from "react";
import Charts from "./charts/Chart";

function Home() {
  return (
    <div>
      <h2 className="text-center p-5" style={{ color: "black" }}>
        Dashboard
      </h2>
      <div className="justify-content-center flex">
        <Charts />
      </div>
    </div>
  );
}

export default Home;
