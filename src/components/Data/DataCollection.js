import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import DeviceData from "./DeviceData";

function DataCollection() {
  const [Display, setDisplay] = useState(false);
  const [overview, setoverview] = useState([]);
  const [Data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/getAll")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  const afterClick = (temp) => {
    setDisplay(!Display);
    setoverview(temp);
  };
  const nameTemplate = (itm) => {
    return (
      <Button
        label={itm.deviceId}
        text
        onClick={() => afterClick(itm.overview)}
      />
    );
  };
  return (
    <div className="grid grid-nogutter" style={{ width: "100%" }}>
      <Dialog
        header="Device Data Overview"
        visible={Display}
        onHide={() => setDisplay(!Display)}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <DeviceData overview={overview} />
      </Dialog>
      ;
      <div className="col-12 justify-content-between flex ">
        <h1
          className="text-center p-1 mt-1"
          style={{ color: "black", width: "100%" }}
        >
          Device data
        </h1>
      </div>
      <div className="col-12 card  p-4 pt-5">
        <DataTable
          value={Data}
          paginator
          rows={5}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            field="deviceId"
            header="Device ID"
            body={nameTemplate}
          ></Column>
          <Column field="type" header="Sensor Type"></Column>
          <Column field="points" header="Total Data Points"></Column>
          <Column field="value" header="Latest Value"></Column>
          <Column field="lastUpdated" header="Last Updated"></Column>
        </DataTable>
      </div>
    </div>
  );
}

export default DataCollection;
