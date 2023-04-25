import { createContext, useState } from "react";
import Notfound from "./Error404/Notfound";
import Sidebar from "./Sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";

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
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
