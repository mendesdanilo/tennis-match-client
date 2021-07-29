import React from "react";
import { allMatches } from "../api";
import { NavLink } from "react-router-dom";

class MatchesList extends React.Component {
  state = {
    matches: [],
  };

  async componentDidMount() {
    const response = await allMatches();
    //console.log("test", response);
    //console.log(response.data);
    this.setState({
      matches: response.data,
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
        {this.state.matches.map((match) => {
          return (
            <>
              <div className="d-flex justify-content-center">
                <div class="form-row" style={{ width: "18rem" }}>
                  <img src={match.imageUrl} class="card-img-top" alt="" />
                  <div class="form-row">
                    <p> {match.username} </p>
                    <p> {match.name} </p>
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

export default MatchesList;
