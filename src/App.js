import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import UserList from "./components/UserList";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = {
    loggedInUser: null,
  };
  setLoggedInUser = (user) => {
    this.setState({
      loggedInUser: user,
    });
  };
  render() {
    return (
      <div className="App">
        <ToastContainer />
        <Navbar loggedInUser={this.state.loggedInUser} />
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/login"
            render={(props) => {
              return (
                <Login {...props} setLoggedInUser={this.setLoggedInUser} />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
