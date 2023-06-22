import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Column } from "primereact/column";
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import Loading from "../Loading";
import { Link, json } from "react-router-dom";

function DashboardList() {
  const [Name, setName] = useState("");
  const [Updatedname, setUpdatedname] = useState("");
  const [Description, setDescription] = useState("");
  const [products, setProducts] = useState([]);
  const [UpdateId, setUpdateId] = useState("");
  const [Display1, setDisplay1] = useState(false);
  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("dashboard")));
  }, []);

  const Deleteitem = (id) => {
    const data = JSON.parse(localStorage.getItem("dashboard"));
    const indexToDelete = data.findIndex((obj) => obj.Id === id);
    data.splice(indexToDelete, 1);
    setProducts(data);
    localStorage.setItem("dashboard", JSON.stringify(data));
  };
  const Updateitem = (id) => {
    const data = JSON.parse(localStorage.getItem("dashboard"));
    const index = data.findIndex((obj) => obj.Id === id);
    data[index] = { Id: Updatedname, items: [], createdAt: "12-05-23" };
    setProducts(data);
    localStorage.setItem("dashboard", JSON.stringify(data));
    setDisplay1(!Display1);
  };

  const HandleSubmit = () => {
    setloading(!loading);
    setDisplay(!Display);
    const data = [
      ...products,
      { name: Name, key: Name, createdAt: "12-05-23" },
    ];
    setProducts(data);
    localStorage.setItem(
      "dashboard",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("dashboard")),
        { Id: Name, items: [], createdAt: "12-05-23" },
      ])
    );
    setTimeout(() => {
      setloading(false);
    }, 2000);
  };
  const nameTemplate = (itm) => {
    return (
      <Link to={`/visualization/dashboard/${itm.Id}`} className="no-underline">
        <a
        // href={`/visualization/dashboardlist:${itm.name}`}
        >
          {itm.Id}
        </a>
      </Link>
    );
  };
  const optionsTemplate = (item) => {
    return (
      <div className="grid grid grid-nogutter">
        <div className="col-5 p-2">
          <Button
            icon="pi pi-pencil"
            rounded
            outlined
            onClick={() => {
              setUpdateId(item.Id);
              setDisplay1(true);
            }}
          />
        </div>
        <div className="col-6 p-2">
          <Button
            icon="pi pi-times"
            severity="danger"
            rounded
            outlined
            onClick={() => Deleteitem(item.Id)}
          />
        </div>
      </div>
    );
  };
  const [loading, setloading] = useState(false);
  const [Display, setDisplay] = useState(false);

  return (
    <div className="grid grid grid-nogutter p-5">
      <div className="col-12 justify-content-center flex">
        <Button
          icon="pi pi-plus"
          rounded
          outlined
          label="Add Dashboard"
          onClick={() => setDisplay(true)}
        />
      </div>
      <Dialog
        visible={Display}
        position={"top"}
        onHide={() => setDisplay(!Display)}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <div className="flex align-items-center justify-content-center">
          <div className="text-center mb-3">
            <div className="text-900 text-3xl font-medium mb-3">
              Create a new Dashboard
            </div>

            <div>
              <label
                htmlFor="text"
                className="block text-1000 font-medium mb-1 "
              >
                Name
              </label>
              <InputText
                className="w-10"
                cols={60}
                placeholder="Enter here........"
                value={Name}
                onChange={(e) => setName(e.target.value)}
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
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <br />
              <br />

              <Button
                label="Submit"
                rounded
                className="w-full"
                onClick={HandleSubmit}
              />
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        visible={Display1}
        onHide={() => setDisplay1(!Display1)}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <div className="flex align-items-center justify-content-center">
          <div className="text-center mb-3">
            <div className="text-900 text-3xl font-medium mb-3">
              Update Dashboard
            </div>

            <div>
              <label
                htmlFor="text"
                className="block text-1000 font-medium mb-1 "
              >
                Name
              </label>
              <InputText
                className="w-10"
                cols={60}
                placeholder={UpdateId}
                value={Updatedname}
                onChange={(e) => setUpdatedname(e.target.value)}
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
                placeholder="Enter description here"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <br />
              <br />

              <Button
                label="Submit"
                rounded
                className="w-full"
                onClick={() => Updateitem(UpdateId)}
              />
            </div>
          </div>
        </div>
      </Dialog>
      <div className="col-12 p-4 pt-4">
        {loading ? (
          <Loading />
        ) : (
          <div className="card">
            <DataTable
              value={products}
              tableStyle={{ minWidth: "50rem" }}
              paginator
              rows={4}
            >
              <Column field="Id" header="Name" body={nameTemplate}></Column>
              <Column field="Id" header="Key"></Column>
              <Column field="createdAt" header="Created At"></Column>
              <Column
                field="quantity"
                header="Options"
                body={optionsTemplate}
              ></Column>
            </DataTable>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardList;
