import React from "react";
import { login } from "../api";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await login(this.state);
      this.props.setLoggedInUser(user.data);
      toast.success("Login successful");
      this.props.history.push("/users");
    } catch (e) {
      toast.error("Invalid login");
    }
  };

  render() {
    const { username, password } = this.state;
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 mx-auto">
              <form onSubmit={this.handleFormSubmit}>
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  onChange={this.handleChange}
                  value={username}
                  className="input-group-text"
                />
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  value={password}
                  className="input-group-text"
                />
                <button
                  className="btn btn-outline-primary mx-auto"
                  type="submit"
                >
                  Login
                </button>
                <p>
                  Don't have an account?
                  <NavLink
                    className="btn btn-outline-primary btn-sm"
                    to="/signup"
                  >
                    Signup
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
