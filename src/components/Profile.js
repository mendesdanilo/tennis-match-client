import React from "react";
import { getProfile, updateProfile, uploadFile } from "../api";
import { toast } from "react-toastify";
import "./Profile.css";
import { NavLink } from "react-router-dom";

class Profile extends React.Component {
  state = {
    imageUrl: "",
    username: "",
    name: "",
    lastname: "",
    id: "",
    gender: "",
    role: "",
    hasNewImage: false,
  };

  async componentDidMount() {
    const response = await getProfile();
    this.setState({
      id: response.data._id,
      imageUrl: response.data.imageUrl,
      username: response.data.username,
      name: response.data.name,
      lastname: response.data.lastname,
      gender: response.data.gender,
      role: response.data.role,
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleChangeFile = (event) => {
    this.setState({
      imageUrl: event.target.files[0],
      hasNewImage: true,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();

    let imageResponse;
    if (this.state.hasNewImage) {
      const uploadData = new FormData();
      uploadData.append("image", this.state.imageUrl);
      imageResponse = await uploadFile(uploadData);
    }

    const updatedUser = {
      imageUrl: this.state.hasNewImage
        ? imageResponse.data.fileUrl
        : this.state.imageUrl,
      name: this.state.name,
      lastname: this.state.lastname,
      username: this.state.username,
      id: this.state.id,
    };

    await updateProfile(updatedUser);
    toast.success("Profile Saved!");
    this.props.history.push("/users");
  };

  render() {
    const { imageUrl, username, name, lastname, gender, role } = this.state;
    return (
      <>
        <div>
          <NavLink className="nes-btn is-primary btn-sm" to="/users">
            Back
          </NavLink>
        </div>
        <div className="d-flex justify-content-center">
          <div class="form-row" style={{ width: "18rem" }}>
            <img src={imageUrl} class="card-img-top" alt="" />
            <div class="form-row">
              <form class="needs-validation" onSubmit={this.handleFormSubmit}>
                <label>Upload Photo</label>
                <input
                  class="form-control"
                  type="file"
                  name="image"
                  onChange={this.handleChangeFile}
                />
                <label>Username</label>
                <input
                  class="form-control"
                  type="text"
                  name="username"
                  onChange={this.handleChange}
                  value={username}
                />
                <label>Name</label>
                <input
                  class="form-control"
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  value={name}
                />
                <label>Last name</label>
                <input
                  class="form-control"
                  type="text"
                  name="lastname"
                  onChange={this.handleChange}
                  value={lastname}
                />
                <button className="nes-btn is-primary btn-sm" type="submit">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
