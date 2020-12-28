import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Context } from "./../../utils/context";
import AllUserActionCreator from "./../../redux/actions/AllUserActionCreator";

const Home = props => {
  const [users, setUsers] = useState([]);
  let context = useContext(Context);

  useEffect(() => {
    // loadUsers();
    props.updateUserEditStatus(false);
    props.callGetAllUserSaga(context);
  }, []);

  useEffect(() => {
    console.log("user data is " + JSON.stringify(props.userList));
  }, [props.userList]);

  const handleClick = () => {
    console.log("handle event called");
    props.updateUserEditStatus(true);
  };

  const deleteUser = async userId => {
    await axios.delete(`http://localhost:3003/users/${userId}`);
    props.callGetAllUserSaga(context);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.userList.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-primary mr-2">View</Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                    onClick={() => handleClick()}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
    userList: state.AllUserScreenReducers.userList
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;
