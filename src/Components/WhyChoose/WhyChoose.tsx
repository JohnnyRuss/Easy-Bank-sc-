import React from "react";
import { WhyChooseContainer } from "./WhyChoose.styled";
import Card from "./Card";
import data from "../../lib/data.json";

const WhyChoose: React.FC = () => {
  return (
    <WhyChooseContainer id="about">
      <div className="choice-header">
        <h3 className="choice-header__title">{data.choice.heading}</h3>
        <p className="choice-header__description">{data.choice.description}</p>
      </div>
      <div className="choice-list">
        {data.choice.list.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </WhyChooseContainer>
  );
};

export default WhyChoose;
