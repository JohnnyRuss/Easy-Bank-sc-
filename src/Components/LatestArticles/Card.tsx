import React from "react";

interface Data {
  id: string;
  img: string;
  author: string;
  title: string;
  description: string;
}

interface CardType {
  data: Data;
}

const Card: React.FC<CardType> = ({ data }) => {
  return (
    <div className="latest-list--item">
      <figure className="latest-list--item__fig">
        <img src={data.img} alt={data.title} />
      </figure>
      <div className="item-details--box">
        <span className="item-details--box__author">by {data.author}</span>
        <span className="item-details--box__title">{data.title}</span>
        <p className="item-details--box__description">{data.description}</p>
      </div>
    </div>
  );
};

export default Card;
