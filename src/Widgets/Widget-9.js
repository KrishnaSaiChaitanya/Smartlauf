import React, { useState } from "react";
import { Slider } from "primereact/slider";

export default function Widget9() {
  const [value, setValue] = useState(null);

  return (
    <div
      className="card flex justify-content-center align-items-center p-5"
      style={{ height: "250px" }}
    >
      <Slider
        value={value}
        onChange={(e) => setValue(e.value)}
        className="w-20rem"
        size={400}
      />
    </div>
  );
}
