import React from "react";

import Home from "./components/Home";
import NotFound from "./components/NotFount";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Logout from "./components/auth/Logout";
import NowShowing from "./components/Menu/Movies/NowShowing";
import ComingSoon from "./components/Menu/Movies/ComingSoon";
import Theaters from "./components/Menu/Theaters/Theaters";
import Membership from "./components/Menu/Membership/Membership";
import Information from "./components/account/Information";
import EditAccount from "./components/account/editAccount";
import BookingSeats from "./components/booking/BookingSeats";
import BookingFood from "./components/booking/BookingFood";

const routers = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/login",
    exact: false,
    main: ({ location, history }) => (
      <Login location={location} history={history} />
    ),
  },
  {
    path: "/register",
    exact: false,
    main: ({ location, history }) => (
      <Register location={location} history={history} />
    ),
  },
  {
    path: "/logout",
    exact: false,
    main: ({ location, history }) => (
      <Logout location={location} history={history} />
    ),
  },
  {
    path: "/nowshowing",
    exact: false,
    main: ({ location, history }) => (
      <NowShowing location={location} history={history} />
    ),
  },
  {
    path: "/comingsoon",
    exact: false,
    main: ({ location, history }) => (
      <ComingSoon location={location} history={history} />
    ),
  },
  {
    path: "/theaters",
    exact: false,
    main: ({ location, history }) => (
      <Theaters location={location} history={history} />
    ),
  },
  {
    path: "/membership",
    exact: false,
    main: ({ location, history }) => (
      <Membership location={location} history={history} />
    ),
  },
  {
    path: "/accountInformation",
    exact: false,
    main: ({ location, history }) => (
      <Information location={location} history={history} />
    ),
  },
  {
    path: "/editAccount",
    exact: false,
    main: ({ location, history }) => (
      <EditAccount location={location} history={history} />
    ),
  },
  {
    path: "/bookingSeats",
    exact: false,
    main: ({ location, history }) => (
      <BookingSeats location={location} history={history} />
    ),
  },
  {
    path: "/bookingFood",
    exact: false,
    main: ({ location, history }) => (
      <BookingFood location={location} history={history} />
    ),
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routers;
