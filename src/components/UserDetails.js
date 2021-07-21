import React from "react";
import { getUser } from "../api";
import { NavLink } from "react-router-dom";

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

  render() {
    const { id, username } = this.state;
    return (
      <>
        <p>{username}</p>
        <div>
          <button
            onClick={() => {
              this.props.history.push(`/users/${id}/edit`);
            }}
          >
            Edit
          </button>
          <NavLink to={`/users/${id}/edit`}>Edit</NavLink>
        </div>
      </>
    );
  }
}

export default UserDetails;
