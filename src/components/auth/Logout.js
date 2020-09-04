import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as authActions from "../../actions/auth";

const Logout = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.userLogout());
    props.history.push("/");
  });

  return(
    <div>
      Logout
    </div>
  );
}

export default Logout;