import React, { Component } from "react";

const InputWithtext = props => {
  return (
    <div className={"form-group m-2"}>
      <div>
        <label>{props.label}</label>
      </div>
      <div>
        <input
          style={{ borderRadius: 20 }}
          classes="b-n"
          className={"form-control form-control-lg "}
          type="text"
          name={props.name}
          value={props.value}
          placeholder={props.placeHolderText}
          onChange={props.onChange}
        ></input>
      </div>
    </div>
  );
};

export default InputWithtext;
