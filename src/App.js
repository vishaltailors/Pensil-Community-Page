import Sidebar from "./components/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import WidgetsBar from "./components/widgetsbar";
import Groups from "./pages/groups";

const App = () => {
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="flex">
            <BrowserRouter>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/groups" element={<Groups />} />
              </Routes>
            </BrowserRouter>
            <WidgetsBar />
          </div>
        </div>
        <div className="drawer-side border-r" style={{ maxHeight: "none" }}>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default App;
