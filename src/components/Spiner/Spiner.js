import React from "react";
import Loader from "react-loader-spinner";

const Spiner = () => (
  <div >
    <Loader
      type="ThreeDots"
      color="#f47e12"
      height={100}
      width={100}
      timeout={3000}
    />
  </div>
);

export default Spiner;