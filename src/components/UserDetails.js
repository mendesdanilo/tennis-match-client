import React from "react";
import { getUser, addFavorite } from "../api";
import { toast } from "react-toastify";

class UserDetails extends React.Component {
  state = {
    imageUrl: "",
    username: "",
    name: "",
    lastname: "",
    id: "",
  };

  async componentDidMount() {
    const response = await getUser(this.props.match.params.id);
    this.setState({
      id: response.data._id,
      imageUrl: response.data.imageUrl,
      username: response.data.username,
      name: response.data.name,
      lastname: response.data.lastname,
    });
  }

  addToFavorite = async () => {
    // await getUser (this.state.userId);
    await addFavorite(this.props.match.params.id);
    //success message
    toast.success("Added to favorites!");
    //redirects to all favorites list
    this.props.history.push("/favorites");
  };

  render() {
    const { imageUrl, username, name, lastname } = this.state;
    return (
      <>
        <p>{imageUrl}</p>
        <p>{username}</p>
        <p>{name}</p>
        <p>{lastname}</p>
        <div>
          <button onClick={this.addToFavorite}>Like</button>
        </div>
      </>
    );
  }
}

export default UserDetails;
