import React from "react";
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
  return (
    <div className="sidebar">
      <div className="admin">
        <img
          src="http://gravatar.com/avatar/a3175a452c7a8fea80c62a198a40f6c9?d=identicon"
          alt="avatar__admin"
          className="admin__avatar"
        />
        <Link to="/admin" className="admin__name">Admin</Link>
      </div>
      <Link to="/admin/managementUsers" className="admin__content">
        <FiUsers />
        &nbsp;{t("home.managementUsers")}
      </Link>
      <Link to="/admin/managementMovies" className="admin__content">
        <RiMovie2Line />
        &nbsp;{t("home.managementMovies")}
      </Link>
      <Link to="/admin/managementRevenue" className="admin__content">
        <RiCalendarEventLine />
        &nbsp;{t("home.managementRevenue")}
      </Link>
      <Link to="/admin/managementTicket" className="admin__content">
        <RiTicket2Line />
        &nbsp;{t("home.managementTicket")}
      </Link>
    </div>
  );
};

export default AdminSidebar;
