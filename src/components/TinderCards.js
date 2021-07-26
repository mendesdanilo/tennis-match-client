import React, { useState } from "react";
import { useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "steve",
      url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg",
    },
    {
      name: "mark",
      url: "https://s2.glbimg.com/FUcw2usZfSTL6yCCGj3L3v3SpJ8=/smart/e.glbimg.com/og/ed/f/original/2019/04/25/zuckerberg_podcast.jpg",
    },
  ]);

  useEffect(() => {
    // this will run ONCE when the component loads and never again
  }, [people]);

  return (
    <div>
      <div className="tinderCards">
        {people.map((person) => (
          <TinderCard className="swipe" key={person.name}>
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
              preventSwipe={["up", "down"]}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
