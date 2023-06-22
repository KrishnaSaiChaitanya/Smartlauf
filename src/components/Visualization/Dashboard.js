import React, { useEffect, useRef, useState } from "react";
import { Menu } from "primereact/menu";
import { useNavigate, useParams } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import widgetsData from "../../data/widgets.json";
import { ScrollPanel } from "primereact/scrollpanel";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import WidgetDisplay from "../WidgetDisplay";

function Dashboard() {
  const menu = useRef(null);
  const parms = useParams();

  const [name, setname] = useState("widget1");
  const [curWidget, setcurWidget] = useState("")
  const [Widgets, setWidgets] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dashboard"));
    const index = data.findIndex((obj) => obj.Id === parms["id"]);
    if (data[index].items) {
      setWidgets(data[index].items);
    }
  }, []);

  const elementRef = useRef(null);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  // Function to make the element full screen
  const makeFullScreen = () => {
    const elem = document.getElementById("expand");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  };
  const Addwidget = (id) => {
    setWidgets([...Widgets, id]);
    setcurWidget(id)
    console.log("Hello world");
    const data = JSON.parse(localStorage.getItem("dashboard"));
    const index = data.findIndex((obj) => obj.Id === parms["id"]);
    data[index] = {
      Id: data[index].Id,
      items: [...Widgets, id],
      createdAt: data[index].createdAt,
    };
    console.log(data[index].items);
    localStorage.setItem("dashboard", JSON.stringify(data));
    console.log("Hello world");
    setVisible(!visible);
  };
  const items = [
    {
      label: "Options",
      items: [
        {
          label: "Create New Block",
          icon: "pi pi-plus",
          command: () => {
            setVisible(true);
          },
        },
        {
          label: "Delete",
          icon: "pi pi-times",
          command: () => {},
        },
      ],
    },
    {
      label: "Navigate",
      items: [
        {
          label: "View FullScreen",
          icon: "pi pi-external-link",
          command: () => {
            makeFullScreen();
          },
        },
      ],
    },
  ];

  return (
    <ScrollPanel
      style={{ width: "100%", height: "100%", paddingBottom: "10px" }}
    >
      <div
        ref={elementRef}
        id="expand"
        className="grid grid grid-nogutter"
        // style={{ height: "100%" }}
      >
        <div className="col-12">
          <h2 className="text-center p-4" style={{ color: "black" }}>
            {parms["id"]}
          </h2>
        </div>
        <div className="col-12 justify-content-between flex">
          <div className="px-4">
            <span
              class="bi bi-arrow-left"
              style={{
                fontSize: "30px",
                padding: "10px",
                color: "black",
              }}
              onClick={(e) => navigate(-1)}
            ></span>

            <Dialog
              header="Create a new block"
              visible={visible}
              style={{ width: "50vw" }}
              breakpoints={{ "960px": "75vw", "641px": "100vw" }}
              onHide={() => setVisible(false)}
            >
              <p className="text-center">
                Click on the block you would like to add to your dashboard. You
                can always come back and switch the block type later if you
                change your mind.
              </p>
              <div className="grid grid grid-nogutter">
                {widgetsData.map((itm) => (
                  <div className="col-4 p-4" style={{ position: "relative" }}>
                    <div className="container">
                      <img
                        src={itm.img}
                        className="image"
                        alt="img"
                        style={{ height: "25vh" }}
                        onClick={() => Addwidget(itm.id)}
                      />
                    </div>
                    <div class="middle">
                      <div class="text">John Doe</div>
                    </div>
                  </div>
                ))}
              </div>
            </Dialog>
          </div>
          <div className="px-4">
            <span
              class="bi bi-gear"
              style={{
                fontSize: "30px",
                padding: "10px",
                color: "black",
              }}
              onClick={(e) => menu.current.toggle(e)}
            ></span>
            <Menu model={items} popup ref={menu} />
          </div>
        </div>

        <div className="col-12 grid grid-nogutter p-3">
          {Widgets.map((itm) => (
            <div
              className="col-5 m-5 p-2 "
              style={{ border: "2px dotted black" }}
            >
              {console.log(curWidget)}
              <WidgetDisplay display={curWidget === itm? true : false} id={itm} />
            </div>
          ))}
        </div>
      </div>
    </ScrollPanel>
  );
}

export default Dashboard;
