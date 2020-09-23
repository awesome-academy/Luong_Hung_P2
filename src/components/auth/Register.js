import React, { useState } from "react";
import * as authActions from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import "../../sass/register.scss";
import { useTranslation } from "react-i18next";

const Register = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [region, setRegion] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("Male");
  const dispatch = useDispatch();
  const { t } = useTranslation("common");
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const error1 = useSelector((state) => state.currentUser.error);

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    setPhone("");
    setEmail("");
    setPassword("");
    setRegion("");
    setBirth("");
    setGender("Male");
    dispatch(
      authActions.userRegister({
        name,
        phone,
        email,
        password,
        region,
        birth,
        gender,
      })
    );
  };

  const checkoutUser = () => {
    if (currentUser) {
      props.history.push("/");
    }
  };

  return (
    <form className="register" onSubmit={handleSubmit}>
      <label htmlFor="name">{t("auth.name")}</label>
      <input
        name="name"
        placeholder={t("auth.name")}
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <label htmlFor="phone">{t("auth.phone")}</label>
      <input
        name="phone"
        placeholder={t("auth.phone")}
        value={phone}
        type="text"
        id="phone"
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />

      <label
        htmlFor="email"
        style={error1 ? { color: "red" } : { color: "black" }}
      >
        Email
      </label>
      <input
        name="email"
        placeholder="Email"
        value={email}
        type="text"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        style={error1 ? { borderColor: "red" } : { color: "black" }}
      />
      <br />

      <label
        htmlFor="password"
        style={error1 ? { color: "red" } : { color: "black" }}
      >
        {t("auth.password")}
      </label>
      <input
        type="password"
        name="password"
        placeholder={t("auth.password")}
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={error1 ? { borderColor: "red" } : { color: "black" }}
      />
      <br />

      <label htmlFor="region">{t("auth.region")}</label>
      <input
        name="region"
        placeholder={t("auth.region")}
        value={region}
        type="text"
        id="region"
        onChange={(e) => setRegion(e.target.value)}
      />
      <br />

      <label htmlFor="birth">{t("auth.dateOfBirth")}</label>
      <input
        name="birth"
        placeholder={t("auth.dateOfBirth")}
        value={birth}
        type="date"
        id="birth"
        onChange={(e) => setBirth(e.target.value)}
      />
      <br />

      <label htmlFor="Male">{t("auth.gender")}</label>
      <label htmlFor="Male" className="gender">
        <input
          name="gender"
          type="radio"
          value="Male"
          id="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        {t("auth.male")}
      </label>
      <br />
      <label htmlFor="Female" className="gender">
        <input
          name="gender"
          type="radio"
          value="Female"
          id="Female"
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        {t("auth.female")}
      </label>
      <br />

      <input type="submit" value={t("auth.register")} />
      {currentUser ? checkoutUser() : ""}
    </form>
  );
};

export default Register;
