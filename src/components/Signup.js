import React from "react";
import { signup } from "../api";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

class Signup extends React.Component {
  state = {
    role: "",
    gender: "",
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
      await signup(this.state);
      toast.success("Sign up successful");
      this.props.history.push("/login");
    } catch (e) {
      toast.error("Not possible to signup");
    }
  };

  render() {
    const { role, gender, username, password } = this.state;
    return (
      <>
        <div>
          <form className="signup" onSubmit={this.handleFormSubmit}>
            <div>
              <label>I am</label>
              <select
                className="form-select"
                name="role"
                onChange={this.handleChange}
                value={role}
              >
                <option value="">Select</option>
                <option value="coach">Coach</option>
                <option value="athlete">Athlete</option>
              </select>
            </div>

            <div>
              <label>Men or Women</label>
              <select
                className="form-select"
                name="gender"
                onChange={this.handleChange}
                value={gender}
              >
                <option value="">Select</option>
                <option value="male">Men</option>
                <option value="female">Women</option>
              </select>
            </div>

            <div>
              <label>Username</label>
              <input
                className="input-group-text"
                type="text"
                name="username"
                onChange={this.handleChange}
                value={username}
              />
            </div>

            <div>
              <label>Password</label>
              <input
                className="input-group-text"
                type="password"
                name="password"
                onChange={this.handleChange}
                value={password}
              />
            </div>

            <div>
              <button type="submit">Signup</button>
            </div>
          </form>
        </div>

        <div>
          <p>
            Already have an account? <NavLink to="/login">Login</NavLink>
          </p>
        </div>
      </>
    );
  }
}

export default Signup;
