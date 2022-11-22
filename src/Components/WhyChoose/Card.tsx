import React from "react";

interface Data {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface CardType {
  data: Data;
}

const Card: React.FC<CardType> = ({ data }) => {
  return (
    <div className="choice-list--item">
      <figure className="choice-list--item__fig">
        <img src={data.icon} alt={data.title} />
      </figure>
      <span className="choice-list--item__title">{data.title}</span>
      <p className="choice-list--item__description">{data.description}</p>
    </div>
  );
};

export default Card;
