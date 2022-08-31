import Home from "./pages/home";
import Sidebar from "./components/sidebar";
import WidgetsBar from "./components/widgetsbar";
import Groups from "./pages/groups";
import Header from "./components/mobile/header";
import Navigation from "./components/mobile/navigation";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import Messages from "./pages/messages";
import Conversation from "./components/conversation";

const Routing = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/groups" element={<Groups />} />
    <Route path="/messages" element={<Messages />}>
      <Route path=":userId" element={<Conversation />} />
    </Route>
  </Routes>
);

const App = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <BrowserRouter>
      {isTablet ? (
        <>
          <div class="drawer drawer-end">
            <input id="widget-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
              <Header />
              <div className="my-12">
                <Routing />
              </div>
              <Navigation />
            </div>
            <div class="drawer-side">
              <label htmlFor="widget-drawer" class="drawer-overlay"></label>
              <WidgetsBar isTablet={true} />
            </div>
          </div>
        </>
      ) : (
        <div className="flex h-full">
          <div className="sticky top-0 self-start">
            <Sidebar />
          </div>
          <Routing />
          <WidgetsBar />
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
