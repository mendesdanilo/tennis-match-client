import React from "react";
import { getProfile, updateProfile, uploadFile } from "../api";
import { toast } from "react-toastify";

class Profile extends React.Component {
  state = {
    imageUrl: "",
    username: "",
    name: "",
    lastname: "",
    id: "",
    gender: "",
    role: "",
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
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const uploadData = new FormData();
    uploadData.append("image", this.state.imageUrl);
    const response = await uploadFile(uploadData);
    const updatedUser = {
      imageUrl: response.data.fileUrl,
      name: this.state.name,
      lastname: this.state.lastname,
      id: this.state.id,
    };

    await updateProfile(updatedUser);
    toast.success("Project created");
    this.props.history.push("/");
  };

  render() {
    const { imageUrl, username, name, lastname, gender, role } = this.state;
    return (
      <>
        <p>{imageUrl && <img src={imageUrl} alt="profile" />}</p>
        <p>{username}</p>
        <p>{name}</p>
        <p>{lastname}</p>
        <p>{gender}</p>
        <p>{role}</p>
        <form onSubmit={this.handleFormSubmit}>
          <label>Photo</label>
          <input type="file" name="image" onChange={this.handleChangeFile} />

          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
          />

          <label>Last name</label>
          <input
            type="text"
            name="lastname"
            onChange={this.handleChange}
            value={lastname}
          />
          <button type="submit">Save</button>
        </form>
      </>
    );
  }
}

export default Profile;
