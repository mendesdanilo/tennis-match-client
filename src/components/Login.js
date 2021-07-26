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
        <div className="login">
          <form onSubmit={this.handleFormSubmit}>
            <div className="login">
              <label>Username</label>
              <input
                type="text"
                name="username"
                onChange={this.handleChange}
                value={username}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                value={password}
              />
            </div>
            <div className="login">
              <button className="login" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="login">
          <p>
            Don't have an account? <NavLink to="/signup">Signup</NavLink>
          </p>
        </div>
      </>
    );
  }
}

export default Login;
