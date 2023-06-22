import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import React, { useState } from "react";

function DeviceRegistry() {
  const [products, setProducts] = useState([]);
  const [Display, setDisplay] = useState(false);
  return (
    <div className="grid grid grid-nogutter p-5">
      <div className="col-12 justify-content-center flex">
        <Button
          icon="pi pi-plus"
          rounded
          outlined
          label="Add New Device"
          onClick={() => setDisplay(true)}
        />
      </div>
      <Dialog
        visible={Display}
        onHide={() => setDisplay(!Display)}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <div className="flex align-items-center justify-content-center">
          <div className="text-center mb-3">
            <div className="text-900 text-3xl font-medium mb-3 p-2">
              Register a New Device
            </div>

            <div>
              <InputText
                className="w-10 mb-2"
                cols={60}
                placeholder="Enter Device Name here........"
              />
              <br />
              <InputText
                className="w-10 mb-2"
                cols={60}
                placeholder="Enter Status here........"
              />
              <br />
              <InputText
                className="w-10 mb-2"
                cols={60}
                placeholder="Enter Created On here........"
              />
              <br />
              <InputText
                className="w-10 mb-2"
                cols={60}
                placeholder="Enter Last Connected here........"
              />
              <br />

              <label
                htmlFor="text"
                className="block text-1000 font-medium mb-2"
              >
                Description
              </label>

              <InputTextarea
                className="w-10"
                rows={4}
                cols={85}
                style={{ width: "40%" }}
                placeholder="Enter here ........."
              />

              <br />
              <br />

              <Button label="Submit" rounded className="w-full" />
            </div>
          </div>
        </div>
      </Dialog>

      <div className="col-12 p-4 pt-4">
        <div className="card">
          <DataTable
            value={products}
            tableStyle={{ minWidth: "50rem" }}
            paginator
            rows={4}
          >
            <Column field="Id" header="Device ID"></Column>
            <Column field="Id" header="Device Name"></Column>
            <Column field="Description" header="Description"></Column>
            <Column field="Status" header="Status"></Column>
            <Column field="Status" header="Created On"></Column>
            <Column field="Status" header="Last Connected"></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
}

export default DeviceRegistry;
