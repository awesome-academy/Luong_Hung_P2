import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as authActions from "../../actions/auth";

const Admin = (props) => {
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.account());
  }, [dispatch]);

  const checkAdmin = () => {
    props.history.push("/");
  };

  const showAdminUser = () => {
    props.history.push("admin/managementUsers");
  };

  return (
    <div>
      {currentUser && currentUser.email === "admin@admin"
        ? showAdminUser()
        : checkAdmin()}
    </div>
  );
};

export default Admin;
