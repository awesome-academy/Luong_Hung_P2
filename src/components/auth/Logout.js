import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as authActions from "../../actions/auth";
import { useTranslation } from 'react-i18next';

const Logout = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation("common");

  useEffect(() => {
    dispatch(authActions.userLogout());
    props.history.push("/");
  });

  return(
    <div>
      {t("header.logout")}
    </div>
  );
}

export default Logout;