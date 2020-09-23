import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as authActions from "../../actions/auth";
import * as uiActions from "../../actions/ui";
import "../../sass/login.scss";
import { useTranslation } from "react-i18next";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { t } = useTranslation("common");
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    dispatch(authActions.userLogin({ email, password }));
    dispatch(uiActions.toggleSidebar(true));
  };

  const checkoutAdmin = () => {
    if (currentUser && currentUser.email === "admin@admin") {
      props.history.push("/admin");
    }
  }

  const checkoutUser = () => {
    if(currentUser && currentUser.email !== "admin@admin") {
      props.history.push("/");
    }
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        name="email"
        placeholder="Email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <label htmlFor="password">{t("auth.password")}</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <input type="submit" value={t("header.login")} />
      {currentUser && currentUser.email === "admin@admin" ? checkoutAdmin() : checkoutUser()}
    </form>
  );
};

export default Login;
