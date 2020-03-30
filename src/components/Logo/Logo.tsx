import React from "react";
import lawberryLogo from "../../assets/logoLaw.png";
import classes from "./Logo.module.css";
// import Icon from "@ant-design/icons";

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

// const LogoIcon = (props: any) => <Icon component={Logo} {...props} />;

export default Logo;
