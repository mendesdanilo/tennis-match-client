import React from "react";
import { getUser, addFavorite } from "../api";
import { toast } from "react-toastify";

class UserDetails extends React.Component {
  state = {
    username: "",
    id: "",
  };

  async componentDidMount() {
    const response = await getUser(this.props.match.params.id);
    this.setState({
      id: response.data._id,
      username: response.data.username,
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
    const { username } = this.state;
    return (
      <>
        <p>{username}</p>
        <div>
          <button onClick={this.addToFavorite}>Like</button>
        </div>
      </>
    );
  }
}

export default UserDetails;
