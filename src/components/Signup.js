import React from "react";
import { signup } from "../api";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { DropdownButton, Dropdown } from "react-bootstrap";

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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form style={{ width: "300px" }} onSubmit={this.handleFormSubmit}>
            <label>User Type</label>
            <select
              className="form-select"
              name="role"
              onChange={this.handleChange}
              value={role}
            >
              <option value="">Select</option>
              <option value="coach">Coach</option>
              <option value="student">Student</option>
            </select>
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
            <label>Username</label>
            <input
              className="input-group-text"
              type="text"
              name="username"
              onChange={this.handleChange}
              value={username}
            />
            <label>Password</label>
            <input
              className="input-group-text"
              type="password"
              name="password"
              onChange={this.handleChange}
              value={password}
            />
            <button type="submit">Signup</button>
          </form>
        </div>
        <p>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </>
    );
  }
}

export default Signup;
