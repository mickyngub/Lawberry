import React from "react";
import { MenuOutlined } from "@ant-design/icons";

type drawerToggleProps = {
  clicked?: any;
};

const drawerToggle = (props: drawerToggleProps) => {
  return (
    <div onClick={props.clicked}>
      {" "}
      <MenuOutlined style={{ color: "", fontSize: 35 }} />
    </div>
  );
};

export default drawerToggle;
