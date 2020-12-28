import React, { Component } from "react";
import ButtonWithImage from "./controls/ButtonWithImage";
import InputWithtext from "./controls/InputWithtext";

class Patient extends Component {
  state = {};
  render() {
    return (
      <section className="sendEmalPopup">
        <div>
          {/* <div className="row search-wrap"> */}
          {/* <div className="col-12 col-lg-8 align-self-center d-flex flex-wrap"></div>
            <div className="col-lg-4 col-12 text-right d-flex justify-content-end align-items-center flex-wrap"> */}
          {/* <div className="form-control d-flex text-nowrap align-items-center buttonSeconderyTopBar"> */}
          <div className="col-md-12 col-lg-4 col-xl-4 gen-info-wrap">
            <InputWithtext
              label="Patient Id"
              onChange={val => {
                console.log("value is " + val);
              }}
            ></InputWithtext>

            <InputWithtext
              label="First Name"
              onChange={val => {
                console.log("value is " + val);
              }}
            ></InputWithtext>

            <InputWithtext
              label="Last Name"
              onChange={val => {
                console.log("value is " + val);
              }}
            ></InputWithtext>

            <InputWithtext
              label="Email Address"
              onChange={val => {
                console.log("value is " + val);
              }}
            ></InputWithtext>

            <InputWithtext
              label="telephone"
              onChange={val => {
                console.log("value is " + val);
              }}
            ></InputWithtext>
          </div>
          <div style={{ backgroundColor: "red" }} className="center-block">
            <ButtonWithImage buttonText="Submit" />
          </div>

          {/* <InputWithtext */}
          {/* </div>
            </div>
          </div> */}
        </div>
      </section>
    );
  }
}

export default Patient;
