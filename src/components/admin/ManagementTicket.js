import React from "react";
import { useSelector } from "react-redux";

const ManagementTicket = (props) => {
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  const checkAdmin = () => {
    props.history.push("/");
  };

  const showAdminUser = () => {
    
  };

  return (
    <div>
      {/* {currentUser && currentUser.email === "admin@admin" */}
        {/* ? showAdminUser() */}
        {/* : checkAdmin()} */
        showAdminUser()
        }
    </div>
  );
};

export default ManagementTicket;