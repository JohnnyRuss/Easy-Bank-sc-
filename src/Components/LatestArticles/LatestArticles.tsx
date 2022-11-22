import React from "react";
import { LatestContainer } from "./LatestArticles.styled";
import Card from "./Card";
import data from "../../lib/data.json";

const LatestArticles: React.FC = () => {
  return (
    <LatestContainer id="blog">
      <h3 className="latest-heading__title">{data.latest.heading}</h3>
      <div className="latest-list">
        {data.latest.list.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </LatestContainer>
  );
};

export default LatestArticles;
