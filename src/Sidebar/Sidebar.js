import SidebarItem from "./SidebarItem";
import items from "../data/sidebar.json";
import { useContext, useEffect, useState } from "react";
import { SideMenu } from "../App";

export default function Sidebar() {
  const menu = useContext(SideMenu);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`sidebar ${menu.showSidebar ? "visible" : ""}`}>
      <div className="logo">
        {isMobile && (
          <div className="flex" style={{ justifyContent: "flex-end" }}>
            <span
              id="boot-icon"
              class="bi bi-x-lg"
              onClick={() => menu.setshowSidebar(!menu.showSidebar)}
              style={{
                fontSize: "20px",
                padding: "10px",
                color: "rgb(255, 255, 255)",
                justifyContent: "end",
              }}
            ></span>
          </div>
        )}
        <div className="text-center" style={{ padding: "30px" }}>
          <h2>Smartlauf</h2>
        </div>
      </div>
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
}
