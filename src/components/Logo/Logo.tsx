import React from "react";
import lawberryLogo from "../../assets/logoLaw.png";
import classes from "./Logo.module.css";

// type logoProps = {
//   g?: any;
// };
const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={lawberryLogo} alt="logo" />
    </div>
  );
};

export default Logo;
