import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div>
        <h1>TennisMatch</h1>
      </div>
      <div className="images">
        <img className="tennis-image" alt="" src="/images/tennisgirl.png" />
        <img className="tennis-image" alt="" src="/images/tennisboy.png" />
      </div>
    </>
  );
}
export default Home;
