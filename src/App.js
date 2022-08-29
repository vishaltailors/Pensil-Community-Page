import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";

const App = () => {
  return (
    <>
      <Header />
      <div className="drawer-mobile drawer">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
        <div className="drawer-side">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default App;
