import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import InputWithText from "./../controls/InputWithtext";
import axios from "axios";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AllUserActionCreator from "./../../redux/actions/AllUserActionCreator";

const EditUser = props => {
  let history = useHistory();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    console.log("result is " + JSON.stringify(result.data.name));
    setName(result.data.name);
    setUserName(result.data.username);
    setEmail(result.data.email);
    setPhone(result.data.phone);
    setWebsite(result.data.website);
  };

  const onSubmit = async e => {
    e.preventDefault();
    let user = {
      name: name,
      username: username,
      email: email,
      phone: phone,
      website: website
    };
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <div className="text-center mb-4">
          <h1>Edit A User</h1>
        </div>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <InputWithText
              placeHolderText="Enter your name"
              value={name}
              name="name"
              onChange={e => setName(e.target.value)}
            ></InputWithText>
          </div>
          <div className="form-group">
            <InputWithText
              placeHolderText="Enter your username"
              value={username}
              name="username"
              onChange={val => {
                setUserName(val.target.value);
              }}
            ></InputWithText>
          </div>
          <div className="form-group">
            <InputWithText
              placeHolderText="Enter your email-Address"
              value={email}
              name="email"
              onChange={val => {
                setEmail(val.target.value);
              }}
            ></InputWithText>
          </div>
          <div className="form-group">
            <InputWithText
              placeHolderText="Enter your phone number"
              value={phone}
              name="phone"
              onChange={val => {
                setPhone(val.target.value);
              }}
            ></InputWithText>
          </div>
          <div className="form-group">
            <InputWithText
              placeHolderText="Enter Website name"
              value={website}
              name="website"
              onChange={val => {
                setWebsite(val.target.value);
              }}
            ></InputWithText>
          </div>

          <div className="form-group">
            <button className="btn btn-warning btn-block">Update User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(AllUserActionCreator, dispatch)
});
const mapStateToProps = state => {
  return {
    // isLoading: state.LoginScreenReducer.isLoading
    isUserEdit: state.AllUserScreenReducers.isUserEdit
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
