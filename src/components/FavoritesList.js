import React from "react";
import { allFavorites } from "../api";

class FavoritesList extends React.Component {
  state = {
    favorites: [],
  };

  async componentDidMount() {
    const response = await allFavorites();
    //console.log("test", response);
    //console.log(response.data);
    this.setState({
      favorites: response.data,
    });
    //console.log(this.state);
  }

  render() {
    return (
      <>
        <p>Favorites</p>
        {this.state.favorites.map((favorite) => {
          return <p> {favorite.username} </p>;
        })}
      </>
    );
  }
}

export default FavoritesList;
