import React from "react";

const ButtonWithImage = props => {
  return (
    <div style={{ width: "20%" }}>
      <button className="btn btn-primary btn-sm m-2">{props.buttonText}</button>
    </div>
  );
};

export default ButtonWithImage;
