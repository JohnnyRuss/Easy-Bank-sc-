import React from "react";
import { InviteBTN } from "../Layouts";

const DigitalDetails: React.FC = () => {
  return (
    <div className="digital-details">
      <h3 className="digital-details__title">Next generation digital banking</h3>
      <p className="digital-details__description">
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.{" "}
      </p>
      <InviteBTN />
    </div>
  );
};

export default DigitalDetails;
