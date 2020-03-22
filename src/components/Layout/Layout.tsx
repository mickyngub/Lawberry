import React from "react";

import Aux from "../../hoc/Aux";

type LayoutProps = {
  children?: any;
};

const layout = (props: LayoutProps) => {
  return (
    <Aux>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main>{props.children}</main>
    </Aux>
  );
};

export default layout;
