import React from "react";
import { useSelector } from "react-redux";

const ManagementMovies = (props) => {
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  const checkAdmin = () => {
    props.history.push("/");
  };

  const showAdminUser = () => {
    
  };

  return (
    <div className="wrapperAdminMovies">
      {/* {currentUser && currentUser.email === "admin@admin" */}
        {/* ? showAdminUser() */}
        {/* : checkAdmin()} */
        showAdminUser()
        }
    </div>
  );
};

export default ManagementMovies;