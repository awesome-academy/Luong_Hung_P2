import React from "react";
import "./sass/layout.scss";
import "./sass/header.scss";
import Header from "./components/Partials/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routers from "./routers";
import Footer from "./components/Partials/Footer";
import Loading from "./commons/loading";
import { useSelector } from "react-redux";
import AdminSidebar from "./components/Partials/AdminSidebar";

const App = () => {
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const toggleSidebar = useSelector((state) => state.ui.showSidebar);
  
  const showContentMenus = (routers) => {
    let result = null;

    if (routers.length > 0) {
      result = routers.map((router, index) => {
        return (
          <Route
            key={index}
            path={router.path}
            exact={router.exact}
            component={router.main}
          />
        );
      });
    }
    return result;
  };

  return (
    <Router>
      <div className="App">
        <Header />
        {currentUser && currentUser.email === "admin@admin" && toggleSidebar ? (
          <AdminSidebar />
        ) : (
          ""
        )}
        <ToastContainer position="bottom-right" />
        <Loading />
        <Switch>{showContentMenus(routers)}</Switch>
        {!currentUser ? (
          <Footer />
        ) : currentUser.email === "admin@admin" ? (
          ""
        ) : (
          <Footer />
        )}
      </div>
    </Router>
  );
};

export default App;
