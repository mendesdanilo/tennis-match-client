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
          <NavLink className="nes-btn is-primary btn-sm" to="/users">
            Back
          </NavLink>
        </div>
        {this.state.favorites.map((favorite) => {
          return (
            <>
              <div className="d-flex justify-content-center">
                <div class="form-row" style={{ width: "18rem" }}>
                  <img src={favorite.imageUrl} class="card-img-top" alt="" />
                  <div class="form-row">
                    <p> {favorite.username} </p>
                    <p> {favorite.name} </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  }
}

export default FavoritesList;
