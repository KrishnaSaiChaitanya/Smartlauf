import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

export function Widget4(props) {
  const [value, setValue] = useState(60);
  const [name, setname] = useState("");
  const [Data, setData] = useState([]);
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
  function convertObjectsToArray(objArray) {
    var result = [];
    for (var i = 0; i < objArray.length; i++) {
      var innerArray = [];
      var obj = objArray[i];
      if (obj.hasOwnProperty("timestamp")) {
        innerArray.push(obj.timestamp);
      }
      if (obj.hasOwnProperty("value")) {
        innerArray.push(obj.value);
      }
      result.push(innerArray);
    }
    return result;
  }

  const [selectedData, setselectedData] = useState(null);
  const [Display, setDisplay] = useState(props.display);
  const [Display1, setDisplay1] = useState(false);
  const icontemplate = () => {
    return <span className="pi pi-lock"></span>;
  };
  // useEffect(() => {
  //   setDisplay(true);
  // }, []);
  const first = () => {
    setDisplay(!Display);
    setDisplay1(!Display1);
    if (selectedData.data[0].overview) {
      console.log(convertObjectsToArray(selectedData.data[0].overview));
      setValue(selectedData.data[0].value);
    }
    console.log(selectedData);
  };
  const second = () => {
    setDisplay1(!Display1);
  };
  const [data, setdata] = useState([
    ["Time", " Value"],
    ["2-12-2023", 1000],
    ["26-09-2023", 1170],
    ["2-05-2023", 660],
    // ["22-03-2023", 1030],
  ]);

  const options = {
    title: "Company Performance",
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "50%", height: "70%" },
  };

  return (
    <div
      className="card flex justify-content-center align-items-center"
      style={{ height: "240px", width: "100%" }}
    >
      <Dialog
        header="Connect to a Feed"
        visible={Display}
        onHide={() => setDisplay(!Display)}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <div className="">
          <div className="p-3">
            <p className="text-center p-2">
              A gauge is a read only block type that shows a fixed range of
              values.
            </p>
            <p className="text-center p-2">
              Choose a single feed you would like to connect to this gauge. You
              can also create a new feed within a group.
            </p>
          </div>
          <div className="p-4 pb-2">
            <DataTable
              paginator
              rows={4}
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
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <div className="">
          <div className="p-3">
            <p className="text-center p-2">
              A gauge is a read only block type that shows a fixed range of
              values.
            </p>
            <p className="text-center p-2">
              Choose a single feed you would like to connect to this gauge. You
              can also create a new feed within a group.
            </p>
          </div>
          <div className="card flex justify-content-center  p-2">
            <InputText
              keyfilter="int"
              placeholder="Enter Default Value"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="card flex justify-content-center p-2">
            <InputText
              placeholder="Enter a name for the widget"
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
          <Chart
            chartType="AreaChart"
            width="100%"
            height="240px"
            data={data}
          />
          <h3 className="text-center" style={{ color: "black" }}>
            {name}
          </h3>
        </div>
      )}
    </div>
  );
}
