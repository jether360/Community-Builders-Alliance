import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
import { Drawer, Button } from "antd";
import Logo from "../assets/images/logo.png";
import RightMenu from "./RightMenu";


class MainLayout extends Component {
  state = {
    current: "mail",
    visible: false,
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <nav className="menuBar">
        <div className="logo">
          <a href="/"><img src={Logo} width="90" alt="" /></a>
        </div>
        <div className="menuCon">
          <div className="leftMenu">
            <LeftMenu />
          </div>
          <div className="rigthMenu">
            <RightMenu />
          </div>
          <Button className="barsMenu" onClick={this.showDrawer}>
            <span className="barsBtn"></span>
          </Button>
          <Drawer
            title="Choose"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <LeftMenu />
            <RightMenu />
          </Drawer>
        </div>
      </nav>
    );
  }
}
export default MainLayout;
