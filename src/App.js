import { createContext, useState } from "react";
import Notfound from "./Error/Notfound";
import Sidebar from "./Sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import DashboardList from "./components/Visualization/DashboardList";
import Dashboard from "./components/Visualization/Dashboard";
import DataCollection from "./components/Data/DataCollection";
import DeviceData from "./components/Data/DeviceData";
import Draggablegrid from "./components/Draggablegrid";
import DeviceRegistry from "./components/DeviceManagement/DeviceRegistry";

export const SideMenu = createContext();

function App() {
  const [showSidebar, setshowSidebar] = useState(false);
  return (
    <div className="main">
      <SideMenu.Provider value={{ showSidebar, setshowSidebar }}>
        <Sidebar />
      </SideMenu.Provider>

      <Routes>
        <Route
          path="/"
          element={
            <SideMenu.Provider value={{ showSidebar, setshowSidebar }}>
              <Layout />
            </SideMenu.Provider>
          }
        >
          <Route path="/visualization">
            <Route path="dashboardlist" element={<DashboardList />} />
            <Route path="dashboard/:id" element={<Dashboard />} />
          </Route>

          <Route path="/deviceManagement">
            <Route path="deviceRegistry" element={<DeviceRegistry />} />
          </Route>

          <Route path="/datacollection" element={<DataCollection />} />

          <Route path="/datacollection/:id" element={<DeviceData />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </div>
    // <Draggablegrid />
  );
}

export default App;
