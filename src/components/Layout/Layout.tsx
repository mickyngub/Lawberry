import React, { Component } from "react";
// import Toolbar from "../Navigation/Toolbar/Toolbar";
// import Aux from "../../hoc/Aux";
// import classes from "./Layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import { Layout as LayoutAntd } from "antd";
import { Menu, Breadcrumb } from "antd";
import { MenuOutlined } from "@ant-design/icons";
// import Logo from "../Logo/Logo";
// import classes from "../Layout/Layout.module.css";
// import SubMenu from "antd/lib/menu/SubMenu";
// import Aux from "../../hoc/Aux";
// import LogoIcon from "../Logo/Logo";
import { Empty } from "antd";
// import { Card } from "antd";
// import lawberrylogo from "../../assets/logoLaw.png";
// import Icon from "@ant-design/icons";

const { Header, Content, Footer } = LayoutAntd;

// const { SubMenu } = Menu;

type LayoutProps = {
  children?: any;
  show?: any;
};

class Layout extends Component<LayoutProps> {
  constructor(props: LayoutProps) {
    super(props);
  }

  state = {
    showSideDrawer: false,
    showBackDrop: false,

    mobile: window.innerWidth <= 499
  };

  closedSideDrawerHandler = () => {
    this.setState({ showSideDrawer: false });
    this.setState({ showBackDrop: false });
  };

  openSideDrawerHandler = () => {
    this.setState({ showSideDrawer: true });
    this.setState({ showBackDrop: true });
  };

  drawerToggleHandler = () => {
    this.setState((prevState: any) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  bothFunc = () => {
    this.drawerToggleHandler();
    this.openSideDrawerHandler();
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let currentMobile = window.innerWidth <= 499;
    if (currentMobile !== this.state.mobile) {
      this.setState({ mobile: currentMobile });
    }

    // this.setState((prevState: any) => {
    //   if (prevState !== currentMobile) {
    //     return { mobile: currentMobile };
    //   } else {
    //     return { mobile: prevState };
    //   }
    // });
  }

  render() {
    let contentMenu = null;
    if (this.state.mobile) {
      contentMenu = (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item>
            <MenuOutlined
              onClick={this.openSideDrawerHandler}
              style={{ color: "red", fontSize: 20 }}
            />
          </Menu.Item>
        </Menu>
      );
    } else {
      contentMenu = (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">LAW 1</Menu.Item>
          <Menu.Item key="2">LAW 2</Menu.Item>
          <Menu.Item key="3">LAW 3</Menu.Item>
        </Menu>
      );
    }
    return (
      <LayoutAntd>
        <Header
          style={{
            alignItems: "center",
            position: "fixed",
            zIndex: 1,
            width: "100%"
          }}
        >
          {contentMenu}
        </Header>
        {/* <Toolbar
          showSideDrawer={this.openSideDrawerHandler}
          drawerToggleClicked={this.drawerToggleHandler}
        /> */}
        <SideDrawer
          showSideDrawer={this.state.showSideDrawer}
          showBackDrop={this.state.showBackDrop}
          sideDrawerClosed={this.closedSideDrawerHandler}
        />
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          {/* <div>
            <Icon
              className={classes.Logo}
              component={() => <img src={lawberrylogo} />}
              style={{}}
            />
          </div> */}

          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380, textAlign: "center" }}
          >
            {/* <div className={classes.Logo}> */}
            <Empty description={false} />
            {/* </div> */}
            {/* <Card
              style={{ width: 240, textAlign: "center" }}
              cover={<img alt="example" src={lawberrylogo} />}
            /> */}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          H&M Design ©2018 Created by MICKIE AND HOMIE
        </Footer>
      </LayoutAntd>
    );
  }
}

export default Layout;

{
  /* <div className={classes.Content}>SideDrawer, Backdrop</div> */
}

{
  /* <main className={classes.Content}>
          {this.props.children}
          <p>Where Am I?</p>
        </main> */
}
