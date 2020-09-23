import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as editAccountActions from "../../actions/account";
import { useTranslation } from "react-i18next";
import { toastError } from "../../commons/toast";

const EditAccount = (props) => {
  const account = useSelector((state) => state.currentUser.account);
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const [editAccount, setEditAccount] = useState(account);
  const error1 = useSelector((state) => state.currentUser.error1);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [region, setRegion] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("Male");
  const [avatar, setAvatar] = useState("");
  const dispatch = useDispatch();
  const { t } = useTranslation("common");

  useEffect(() => {
    setEditAccount(account);
  }, [account]);

  useEffect(() => {
    if (account) {
      setName(account[0].name);
      setPhone(account[0].phone);
      setRegion(account[0].region);
      setBirth(account[0].birth);
      setGender(account[0].gender);
      setAvatar(account[0].avatar);
    }
  }, [account]);

  const checkLogin = () => {
    if (!account) {
      props.history.push("/login");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let templ = editAccount[0];
    templ.name = name;
    templ.phone = phone;
    templ.region = region;
    templ.birth = birth;
    templ.gender = gender;
    templ.password = password;
    templ.avatar = avatar;
    if(templ.password === currentUser.password) {
      dispatch(editAccountActions.editAccount(templ));
      props.history.push("/");
    } else {
      toastError({message: "Invalid Password"});
      dispatch(editAccountActions.editAccountFailed({error: "Invalid Password"}));
    }
  };

  const showEditAccount = () => {
    let result = [];
    result.push(
      <form className="register" onSubmit={handleSubmit} key={1}>
        {checkLogin}
        <div className="note" style={{ color: "red" }}>
          {t("auth.requirementConfirmPassword")}
        </div>
        <br />
        <label htmlFor="name">{t("auth.newName")}</label>
        <input
          name="name"
          placeholder={t("auth.newName")}
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />

        <label htmlFor="password" style={{ color: "red" }}>{t("auth.confirmPassword")}</label>
        <input
          name="password"
          placeholder={t("auth.confirmPassword")}
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          style={error1 ? { borderColor: "red" } : { color: "black" }}
        />
        <br />
        <label htmlFor="avatar">{t("auth.avatar")}</label>
        <input
          name="avatar"
          placeholder={t("auth.avatar")}
          value={avatar}
          type="text"
          id="avatar"
          onChange={(event) => setAvatar(event.target.value)}
        />
        <br />

        <label htmlFor="phone">{t("auth.newPhone")}</label>
        <input
          name="phone"
          placeholder={t("auth.newPhone")}
          value={phone}
          type="text"
          id="phone"
          onChange={(event) => setPhone(event.target.value)}
        />
        <br />

        <label htmlFor="region">{t("auth.newRegion")}</label>
        <input
          name="region"
          placeholder={t("auth.newRegion")}
          value={region}
          type="text"
          id="region"
          onChange={(event) => setRegion(event.target.value)}
        />
        <br />

        <label htmlFor="birth">{t("auth.newDateOfBirth")}</label>
        <input
          name="birth"
          placeholder={t("auth.newDateOfBirth")}
          value={birth}
          type="date"
          id="birth"
          onChange={(event) => setBirth(event.target.value)}
        />
        <br />

        <label htmlFor="Male">{t("auth.newGender")}</label>
        <label htmlFor="Male" className="gender">
          <input
            name="gender"
            type="radio"
            value="Male"
            id="Male"
            checked={gender === "Male"}
            onChange={(event) => setGender(event.target.value)}
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
            checked={gender === "Female"}
            onChange={(event) => setGender(event.target.value)}
          />{" "}
          {t("auth.female")}
        </label>
        <br />

        <input type="submit" value={t("auth.editAccount")} />
      </form>
    );
    return result;
  };

  return <div>{account ? showEditAccount() : checkLogin()}</div>;
};

export default EditAccount;
