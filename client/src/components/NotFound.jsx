import React from "react";

import fourOhFour from "../assets/404.png";

const NotFound = () => {
  return (
    <div>
      <h1>404: Not Found</h1>
      <img id="not-found-img" src={fourOhFour} alt="404 Error"></img>
    </div>
  );
};

export default NotFound;
