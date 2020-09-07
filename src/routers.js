import React from "react";

import Home from "./components/Home";
import NotFound from "./components/NotFount";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Logout from "./components/auth/Logout";
import Movies from "./components/Menu/Movies/Movies"
import Theaters from "./components/Menu/Theaters/Theaters"
import Membership from "./components/Menu/Membership/Membership"

const routers = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/login",
    exact: false,
    main: ({ location, history }) => <Login location={location} history={history} />,
  },
  {
    path: "/register",
    exact: false,
    main: ({ location, history }) => <Register location={location} history={history} />,
  },
  {
    path: "/logout",
    exact: false,
    main: ({ location, history }) => <Logout location={location} history={history} />,
  }
  ,
  {
    path: "/movies",
    exact: false,
    main: ({ location, history }) => <Movies location={location} history={history} />,
  }
  ,
  {
    path: "/theaters",
    exact: false,
    main: ({ location, history }) => <Theaters location={location} history={history} />,
  }
  ,
  {
    path: "/membership",
    exact: false,
    main: ({ location, history }) => <Membership location={location} history={history} />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routers;
