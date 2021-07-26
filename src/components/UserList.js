import React, { useState } from "react";
import { useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import { getAllUsers } from "../api";
import { NavLink } from "react-router-dom";

class UserList extends React.Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const response = await getAllUsers();
    //console.log("test", response);
    this.setState({
      users: response.data.allUsers,
    });
    //console.log(this.state.users)
  }

  render() {
    return (
      <>
        <div className="tinderCards">
          {this.state.users.map((user) => {
            console.log(user.username, user.imageUrl);
            return (
              <div key={user._id}>
                <TinderCard className="swipe" key={user.username}>
                  <div
                    className="card"
                    style={{ backgroundImage: `url(${user.imageUrl})` }}
                    preventSwipe={["up", "down"]}
                  >
                    <h3>{user.username}</h3>
                  </div>
                </TinderCard>

                {/* <NavLink to={`/users/${user._id}`}>{user.username}</NavLink> */}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

// function UserList() {
//   const [people, setPeople] = useState([
//   // {
//   //   name: "steve",
//   //   url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg",
//   // },
//   // {
//   //   name: "mark",
//   //   url: "https://s2.glbimg.com/FUcw2usZfSTL6yCCGj3L3v3SpJ8=/smart/e.glbimg.com/og/ed/f/original/2019/04/25/zuckerberg_podcast.jpg",
//   // },
//   ]);

// useEffect(() => {
//   async function fetchPeople(){
//     const response = await getAllUsers();
//     console.log(response);
//     setPeople(response.data);
//     console.log(people);
//   }
//   fetchPeople();
//   // this will run ONCE when the component loads and never again
// }, []);

// return (
//   <div>
//     <div className="tinderCards">

//       {/* {people.map((person) => (
//         <TinderCard className="swipe" key={person.name}>
//           <div
//             className="card"
//             style={{ backgroundImage: `url(${person.url})` }}
//             preventSwipe={["up", "down"]}
//           >
//             <h3>{person.name}</h3>
//           </div>
//         </TinderCard>
//       ))} */}
//     </div>
//   </div>
// );
// }

export default UserList;
