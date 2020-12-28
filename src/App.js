import "./App.css";
import Home from "./components/views/Home";
import About from "./components/views/About";
import Contact from "./components/views/Contact";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/views/NotFounf";
import AddUser from "./components/users/AddUser";

import { Provider } from "react-redux";
import { ContextProvider } from "./utils/context";
import store from "./redux";
import EditUser from "./components/users/EditUser";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ContextProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/contact" component={Contact}></Route>
              <Route exact path="/users/add" component={AddUser}></Route>
              <Route exact path="/users/edit/:id" component={EditUser}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </Router>
        </ContextProvider>
      </Provider>
    </div>
  );
}

export default App;
