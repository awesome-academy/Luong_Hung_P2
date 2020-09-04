import React from "react";
import LoadingIcon from "../images/loading.gif";
import { useSelector } from "react-redux";
import "../sass/loading.scss";

const Loading = () => {
  const showLoading = useSelector((state) => state.ui.showLoading);
  let xhtml = null;
  if (showLoading) {
    xhtml = (
      <div className='globalLoading'>
        <img src={LoadingIcon} alt='loading' className='icon' />
      </div>
    );
  }
  return xhtml;
};

export default Loading;
