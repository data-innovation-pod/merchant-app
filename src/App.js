import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Footer, Sidebar } from "./components";
import { Ecommerce } from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";
import Promotions from "./pages/Promotions";
import ActivityAnalytics from "./pages/ActivityAnalytics";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/data-overview" element={<Ecommerce />} />
                {/* pages  */}
                <Route
                  path="/activity-analytics"
                  element={<ActivityAnalytics />}
                />
                <Route path="/promotions" element={<Promotions />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
