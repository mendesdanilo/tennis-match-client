import React from "react";
import { allFavorites } from "../api";
import { NavLink } from "react-router-dom";

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
        <div>
          <NavLink className="btn btn-outline-primary btn-sm" to="/users">
            Back
          </NavLink>
        </div>
        {this.state.favorites.map((favorite) => {
          return <p> {favorite.username} </p>;
        })}
      </>
    );
  }
}

export default FavoritesList;
