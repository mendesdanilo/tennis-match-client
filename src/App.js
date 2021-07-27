import React from "react";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import FavoritesList from "./components/FavoritesList";
import Profile from "./components/Profile";
import SwipeButtons from "./components/SwipeButtons";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import "react-toastify/dist/ReactToastify.css";

import { loggedIn } from "./api";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import "nes.css/css/nes.min.css";

import "./App.css";

class App extends React.Component {
  state = {
    loggedInUser: null,
  };

  setLoggedInUser = (user) => {
    this.setState({
      loggedInUser: user,
    });
  };

  async componentDidMount() {
    const response = await loggedIn();
    if (!this.state.loggedInUser) {
      if (response.data._id) {
        this.setLoggedInUser(response.data);
      }
    }
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <Navbar
          loggedInUser={this.state.loggedInUser}
          setLoggedInUser={this.setLoggedInUser}
        />
        <Switch>
          {/* <PrivateRoute exact path="/" component={UserList} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/users">
            <UserList />
            <SwipeButtons />
          </Route>
          <Route exact path="/users/:id" component={UserDetails} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/favorites" component={FavoritesList} />
          <Route exact path="/profile" component={Profile} />
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
