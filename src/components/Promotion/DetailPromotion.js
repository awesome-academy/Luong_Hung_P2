import React from "react";
import { useSelector } from "react-redux";
import "../../sass/detailPromotion.scss";
import ReactHtmlParser from 'react-html-parser';

const DetailPromotion = () => {
  const promotion = useSelector((state) => state.promotionReducer.promotion);

  return promotion ? (
    <div className="detailPromotion container">
      <div className="detailPromotion__image">
        <img src={promotion.promotion_image} alt="image__promotion" className="image" />
      </div>
      <div className="detailPromotion__detail">
        <div className="detailPromotion__detail__name">{promotion.name}</div>
        {ReactHtmlParser(promotion.content)}
      </div>
    </div>
  ) : ("");
};

export default DetailPromotion;
