import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useNavigate } from "react-router-dom";
import Notfound from "../../Error/Notfound";
import Empty from "../../Error/Empty";

function DeviceData(props) {
  const navigate = useNavigate();
  console.log(props.overview);
  return (
    <div>
      {props.overview.length !== 0 ? (
        <div className="card mx-4 p-3 mt-3">
          <DataTable
            value={props.overview}
            paginator
            rows={4}
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column field="timestamp" header="Timestamp"></Column>
            <Column field="sensor" header="Sensor Type"></Column>
            <Column field="value" header="Value"></Column>
          </DataTable>
        </div>
      ) : (
        <div className="p-3">
          <Empty />
        </div>
      )}
    </div>
  );
}

export default DeviceData;
