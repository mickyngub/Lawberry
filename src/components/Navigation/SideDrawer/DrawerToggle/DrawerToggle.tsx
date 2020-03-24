import React from "react";

type drawerToggleProps = {
  clicked?: any;
};

const drawerToggle = (props: drawerToggleProps) => {
  return <div onClick={props.clicked}>HOMIEHOMIE</div>;
};

export default drawerToggle;
