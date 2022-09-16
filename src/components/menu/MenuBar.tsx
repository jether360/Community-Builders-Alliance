import React from "react";
import { Layout, Row, Col } from "antd";
import { RouteComponentProps } from "react-router-dom";
import PrivateLayoutHeader from "./PrivateLayoutHeader";
//import MainLayout from "../../app/layouts/MainLayout";

const { Content, Header } = Layout;

interface IProps extends RouteComponentProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

const Menubar = ({ component, ...rest }: IProps) => {
  const Component = component;
  return (
    <>
      {/*
          <MainLayout/>
        */}
      <Header
        style={{
          backgroundColor: "#F8E6D0",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
          borderRadius: "14px",
        }}
      >
        <Row justify="space-between">
          <Col>Logo</Col>
          <Col>
            <PrivateLayoutHeader />
          </Col>
        </Row>
      </Header>
      <Layout className="site-layout" style={{ backgroundColor: "white" }}>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Component {...rest} />
        </Content>
      </Layout>
    </>
  );
};

export default Menubar;
