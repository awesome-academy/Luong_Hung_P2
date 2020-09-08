import React, { useState } from "react";
import * as authActions from "../../actions/auth";
import { useDispatch } from "react-redux";
import '../../sass/register.scss'
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

  const handleChange = (event) => {
    switch (event.target.name) {
      case "name":
        return setName(event.target.value);
      case "phone":
        return setPhone(event.target.value);
      case "email":
        return setEmail(event.target.value);
      case "password":
        return setPassword(event.target.value);
      case "region":
        return setRegion(event.target.value);
      case "birth":
        return setBirth(event.target.value);
      case "gender":
        return setGender(event.target.value);
      default:
        return 0;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
    props.history.push("/");
  };

  return (
    <form className="register" onSubmit={handleSubmit}>
      <label htmlFor='name'>{t("auth.name")}</label>
      <input
        name='name'
        placeholder={t("auth.name")}
        type='text'
        id='name'
        value={name}
        onChange={handleChange}
      />
      <br />

      <label htmlFor='phone'>{t("auth.phone")}</label>
      <input
        name='phone'
        placeholder={t("auth.phone")}
        value={phone}
        type='text'
        id='phone'
        onChange={handleChange}
      />
      <br />

      <label htmlFor='email'>Email</label>
      <input
        name='email'
        placeholder='Email'
        value={email}
        type='text'
        id='email'
        onChange={handleChange}
      />
      <br />

      <label htmlFor='password'>{t("auth.password")}</label>
      <input
        type='password'
        name='password'
        placeholder={t("auth.password")}
        id='password'
        value={password}
        onChange={handleChange}
      />
      <br />

      <label htmlFor='region'>{t("auth.region")}</label>
      <input
        name='region'
        placeholder={t("auth.region")}
        value={region}
        type='text'
        id='region'
        onChange={handleChange}
      />
      <br />

      <label htmlFor='birth'>{t("auth.dateOfBirth")}</label>
      <input
        name='birth'
        placeholder={t("auth.dateOfBirth")}
        value={birth}
        type='date'
        id='birth'
        onChange={handleChange}
      />
      <br />

      <label htmlFor="Male">{t("auth.gender")}</label>
      <label htmlFor="Male" className="gender">
        <input
          name='gender'
          type='radio'
          value='Male'
          id="Male"
          checked={gender === "Male"}
          onChange={handleChange}
        /> {t("auth.male")}
      </label>
      <br />
      <label htmlFor="Female" className="gender">
        <input
          name='gender'
          type='radio'
          value='Female'
          id="Female"
          onChange={handleChange}
        /> {t("auth.female")}
      </label>
      <br />

      <input type='submit' value={t("auth.register")} />
    </form>
  );
};

export default Register;
