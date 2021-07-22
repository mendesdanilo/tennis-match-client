import React from "react";
import { allFavorites } from "../api";

class FavoritesList extends React.Component {
  state = {
    favorites: [],
  };

  async componentDidMount() {
    const response = await allFavorites();
    //console.log("test", response);
    this.setState({
      users: response.data.allUsers,
    });
  }

  render() {
    return (
      <>
        <h3>List of Favorites</h3>
        <ul>
          {this.state.users.map((user) => {
            return <p>{user.username}</p>;
          })}
        </ul>
      </>
    );
  }
}

export default FavoritesList;
