import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";
import DoughnutChart from "../DoughnutChart";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Analytics</h3>
        <DoughnutChart/>
      </div>
    </div>
  );
};

export default RightSide;
