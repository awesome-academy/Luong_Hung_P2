import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as authActions from "../../actions/auth";

const Admin = (props) => {
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const user = useSelector(state => state.currentUser.currentUser);
  const accounts = useSelector(state => state.currentUser.accounts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.account());
  }, [dispatch]);

  useEffect(() => {
    if (user && accounts) {
      const result = [...accounts].filter(account => {
        return account.email === user.email;
      });
      dispatch(authActions.accountInformation(result));
    }
  }, [user, accounts, dispatch]);

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
