import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as adminActions from "../../actions/admin";
import { useTranslation } from "react-i18next";

const EditUser = (props) => {
  const [isOpenModal, setIsOpenModal] = useState(props.isOpenModal);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("Male");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const dispatch = useDispatch();
  const { t } = useTranslation("common");
  const [editAccount, setEditAccount] = useState(props.user);

  useEffect(() => {
    setIsOpenModal(props.isOpenModal);
  }, [props.isOpenModal]);

  useEffect(() => {
    setEditAccount(props.user);
  }, [props.user]);

  useEffect(() => {
    if (props.user) {
      setName(props.user.name);
      setPhone(props.user.phone);
      setRegion(props.user.region);
      setBirth(props.user.birth);
      setGender(props.user.gender);
      setAvatar(props.user.avatar);
      setPassword("");
    }
  }, [props.user]);

  const handleModal = () => {
    props.passIsOpen(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let templ = editAccount;
    templ.name = name;
    templ.phone = phone;
    templ.region = region;
    templ.birth = birth;
    templ.gender = gender;
    templ.password = password;
    templ.avatar = avatar;
    dispatch(adminActions.editUser(templ));
    props.passIsOpen(0);
  };

  return (
    <div
      className={
        !isOpenModal ? "booking-form-container none" : "booking-form-container"
      }
    >
      <div className="background-modal" onClick={handleModal}></div>
      <div className="booking-form">
        <div className="booking-form__inner">
          <form className="register adminEditUser" onSubmit={handleSubmit}>
            <div className="note" style={{ color: "red" }}>
              {t("auth.requirementChangePassword")}
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

            <label htmlFor="password">{t("auth.newPassword")}</label>
            <input
              name="password"
              placeholder={t("auth.newName")}
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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

            <label>{t("auth.newGender")}</label>
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
        </div>
      </div>
    </div>
  );
};

export default EditUser;
