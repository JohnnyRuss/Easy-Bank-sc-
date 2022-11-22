import React from "react";
import DigitalDetails from "./DigitalDetails";
import DigitalFig from "./DigitalFig";
import { DigitalContainer } from "./DigitalBanking.styled";

const DigitalBanking: React.FC = () => {
  return (
    <DigitalContainer id="home">
      <DigitalDetails />
      <DigitalFig />
    </DigitalContainer>
  );
};

export default DigitalBanking;
