import React from "react";

const Wizard = ({ name, house, imgSrc }) => {
  return (
    <div className="Wizard">
      {/* <img src={imgSrc} /> */}
      <div>{name}</div>
      <div>{house}</div>
    </div>
  );
};

export default Wizard;
