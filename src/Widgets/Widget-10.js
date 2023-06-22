import React, { useEffect, useState } from "react";
import { SelectButton } from "primereact/selectbutton";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

export default function Widget10(props) {
  const addObjectId = (data) => {
    return data.map((obj, idx) => {
      return {
        ...obj,
        id: idx + 1,
      };
    });
  };
  useEffect(() => {
    fetch("http://localhost:3001/api/getAll")
      .then((res) => res.json())
      .then((data) => {
        const updatedData = addObjectId(data);
        setData(updatedData);
      });
  }, []);
  const [name, setname] = useState("");
  const options = ["Off", "On"];
  const [value, setValue] = useState(options[0]);
  const [Data, setData] = useState([]);
  const [selectedData, setselectedData] = useState(null);
  const [Display, setDisplay] = useState(props.display);
  const [Display1, setDisplay1] = useState(false);
  const icontemplate = () => {
    return <span className="pi pi-lock"></span>;
  };
  const first = () => {
    setDisplay(!Display);
    if (selectedData.data[0].switch) {
      console.log(selectedData.data[0].switch);
      setValue(selectedData.data[0].switch);
    }
    setDisplay1(!Display1);
    console.log(selectedData);
  };
  const second = () => {
    setDisplay1(!Display1);
  };
  return (
    <div
      className="card flex justify-content-center align-items-center p-5"
      style={{ height: "250px" }}
    >
      <Dialog
        header="Connect to a Feed"
        visible={Display}
        onHide={() => setDisplay(!Display)}
        style={{ width: "70vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <div className="">
          <div className="p-3">
            <p className="text-center p-2">
              A toggle button is useful if you have an ON or OFF type of state.
              You can configure what values are sent on press and release.
              Choose a single feed you would like to connect to this toggle. You
              can also create a new feed within a group.
            </p>
          </div>
          <div className="p-4 pb-2">
            <DataTable
              paginator
              rows={5}
              value={Data}
              selectionMode={null}
              selection={selectedData}
              onSelectionChange={(e) => setselectedData(e.value)}
              dataKey="id"
              tableStyle={{ minWidth: "50rem" }}
            >
              <Column
                selectionMode="single"
                headerStyle={{ width: "3rem" }}
              ></Column>
              <Column field="deviceId" header="Device name"></Column>
              <Column field="value" header="Last value"></Column>
              <Column field="lastUpdated" header="Recorded"></Column>
              <Column body={icontemplate}></Column>
            </DataTable>
          </div>
          <div className="p-3 flex justify-content-end">
            {selectedData ? (
              <Button label="Next Step" onClick={() => first()} rounded />
            ) : (
              <Button
                label="Next Step"
                disabled
                onClick={() => first()}
                rounded
              />
            )}
          </div>
        </div>
      </Dialog>
      <Dialog
        header="Block settings"
        visible={Display1}
        onHide={() => setDisplay1(!Display1)}
        style={{ width: "75%" }}
        // breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <div className="">
          <div className="p-3">
            <p className="text-center p-2">
              In this final step, you can give your block a title and see a
              preview of how it will look. Customize the look and feel of your
              block with the remaining settings. When you are ready, click the
              "Create Block" button to send it to your dashboard.
            </p>
          </div>
          <div className="card flex justify-content-center  p-2">
            <InputText
              placeholder="Enter Default Option"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="card flex justify-content-center p-2">
            <InputText
              placeholder="Enter name for Widget"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="p-3 flex justify-content-end">
            <Button label="Create Block" onClick={() => second()} rounded />
          </div>
        </div>
      </Dialog>
      {!Display && !Display1 && (
        <div className="flex-column">
          <SelectButton
            value={value}
            onChange={(e) => setValue(e.value)}
            options={options}
            size={300}
          />
        </div>
      )}
    </div>
  );
}
