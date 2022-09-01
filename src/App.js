import Sidebar from "./components/sidebar";
import WidgetsBar from "./components/widgetsbar";
import Header from "./components/mobile/header";
import Navigation from "./components/mobile/navigation";

import Groups from "./pages/groups";
import Home from "./pages/home";
import Events from "./pages/events";
import Messages from "./pages/messages";
import Conversation from "./components/conversation";

import CommunityProvider from "./community-provider";
import BannerProvider from "./banner-provider";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./App.css";

const Routing = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/groups" element={<Groups />} />
    <Route path="/messages" element={<Messages />}>
      <Route path=":userId" element={<Conversation />} />
    </Route>
    <Route path="/events" element={<Events />} />
  </Routes>
);

const App = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <CommunityProvider>
      <BannerProvider>
        <BrowserRouter>
          {isTablet ? (
            <>
              <div className="drawer drawer-end">
                <input
                  id="widget-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  <Header />
                  <div className="my-12">
                    <Routing />
                  </div>
                  <Navigation />
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="widget-drawer"
                    className="drawer-overlay"
                  ></label>
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
      </BannerProvider>
    </CommunityProvider>
  );
};

export default App;
