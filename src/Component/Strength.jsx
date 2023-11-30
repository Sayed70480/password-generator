import React from "react";
import './strength.css'; 


const Strength = ({ strength }) => {
  let firstLineColor = "#00f0ff";//blue
  let secondLineColor = "#00f0ff";//blue
  let thirdLineColor = "#00f0ff";//blue
  let fourthLineColor = "#00f0ff";//blue

  if ( strength > 6 ) {
    
      firstLineColor = "#ff003c";//red color
    }
  if (strength > 12) {
     secondLineColor = "#ff003c";//red color
  }
  if (strength > 16 ) {
     thirdLineColor = "#ff003c";//red color
  }
  if (strength >  20 ) {
    fourthLineColor = "#ff003c";//red color
  }

  return (
    <div className="strenth-icon">
      <h6 style={ { color:  fourthLineColor }}>-</h6>
      <h6 style={ { color:  thirdLineColor }}>-</h6>
      <h6 style={ { color:  secondLineColor }}>-</h6>
      <h6 style={ { color: firstLineColor }}>-</h6>
    </div>
  );
};

export default Strength;