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
          return <p> {match.username} </p>;
        })}
      </>
    );
  }
}

export default MatchesList;
