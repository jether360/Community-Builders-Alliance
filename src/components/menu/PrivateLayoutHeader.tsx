import React from "react";
import { Row, Col, Menu, Avatar } from "antd";
import Dropdown from "antd/lib/dropdown";
import { UserOutlined, EditOutlined, LogoutOutlined } from "@ant-design/icons";

const menu = (
  <Menu
    items={[
      {
        label: "Profile",
        key: "1",
        icon: <UserOutlined />,
        onClick: () => {
          //showModal(<AddItems/>);
          // history.push("/user-settings")
        },
      },
      {
        label: "Change Password",
        key: "2",
        icon: <EditOutlined />,
      },
      {
        label: "Sign Out",
        key: "3",
        icon: <LogoutOutlined />,
      },
    ]}
  />
);

const PrivateLayoutHeader = () => {
  return (
    <>
      <Row gutter={24}>
        <Col>
          <h2
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "20px",
            }}
          >
            Juan DelaCruz
          </h2>
        </Col>
        <Col>
          <Dropdown overlay={menu}>
            <Avatar
              size={35}
              icon={<UserOutlined style={{ color: "black" }} />}
              style={{
                backgroundColor: "transparent",
                border: "black solid 1px",
              }}
            />
          </Dropdown>
        </Col>
      </Row>
    </>
  );
};

export default PrivateLayoutHeader;
