import React, { useState } from "react";

const Play = () => {
  return (
    <main className="main-wrapper bg-blue1">
      <div className="started-sec">
        <div className="started-sec-img">
          <img src="img/home1.png" alt="img" />
        </div>
        <div className="started-sec-heading">
          <h2>Adding Fun to Your Life</h2>
          <p>We provide make more experience for playing game</p>
        </div>
        <div className="get-started-btn">
          <a href="#">Get Started</a>
        </div>
      </div>
    </main>
  );
};
export default Play;
