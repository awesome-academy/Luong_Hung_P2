import React, { useEffect, useState } from "react";
import "../../sass/admin.scss";
import { Link } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import {
  RiMovie2Line,
  RiCalendarEventLine,
  RiTicket2Line,
} from "react-icons/ri";
import { useTranslation } from "react-i18next";

const AdminSidebar = () => {
  const { t } = useTranslation("common");
  const [active, setActive] = useState(1);

  return (
    <div className="sidebar">
      <div className="admin">
        <img
          src="http://gravatar.com/avatar/a3175a452c7a8fea80c62a198a40f6c9?d=identicon"
          alt="avatar__admin"
          className="admin__avatar"
        />
        <Link to="/admin" className="admin__name" onClick={() => setActive(1)} >
          Admin
        </Link>
      </div>
      <Link
        to="/admin/managementUsers"
        className={active === 1 ? "admin__content active" : "admin__content"}
        onClick={() => setActive(1)}
      >
        <FiUsers />
        &nbsp;{t("home.managementUsers")}
      </Link>
      <Link
        to="/admin/managementMovies"
        className={active === 2 ? "admin__content active" : "admin__content"}
        onClick={() => setActive(2)}
      >
        <RiMovie2Line />
        &nbsp;{t("home.managementMovies")}
      </Link>
      <Link
        to="/admin/managementRevenue"
        className={active === 3 ? "admin__content active" : "admin__content"}
        onClick={() => setActive(3)}
      >
        <RiCalendarEventLine />
        &nbsp;{t("home.managementRevenue")}
      </Link>
      <Link
        to="/admin/managementTicket"
        className={active === 4 ? "admin__content active" : "admin__content"}
        onClick={() => setActive(4)}
      >
        <RiTicket2Line />
        &nbsp;{t("home.managementTicket")}
      </Link>
    </div>
  );
};

export default AdminSidebar;
