import React from "react";
import { Menu } from "antd";
import { useHistory } from "react-router-dom";

const LeftMenu = () => {
  let history = useHistory();
  const items = [
    {
      label: "Home",
      key: "item-1",
      onClick: () => {
        history.push("/");
      },
    }, // remember to pass the key prop
    {
      label: "Create Contest",
      key: "item-2",
      onClick: () => {
        history.push("/create/election");
      },
    }, // which is required
    {
      label: "Join Contest",
      key: "item-3",
      onClick: () => {
        history.push("/join/election");
      },
    },
  ];
  return <Menu mode="horizontal" items={items} className="menu-items"/>;
};
export default LeftMenu;
