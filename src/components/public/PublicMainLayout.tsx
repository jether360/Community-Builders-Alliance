import React from "react";
import { Layout, Button, Row, Col } from "antd";
import { RouteComponentProps } from "react-router-dom";
import { Link } from "react-scroll";

const { Content, Header } = Layout;

interface IProps extends RouteComponentProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

const PublicMainLayout = ({ component, ...rest }: IProps) => {
  const Component = component;

  return (
    <>
      <Layout
        className="site-layout"
        style={{ backgroundColor: "#E6E6E6", height: "100%", margin: "auto" }}
      >
        <Header
          style={{ backgroundColor: "#E6E6E6", position: "sticky", top: "0" }}
        >
          <Row justify="space-between">
            <Row>
              <Col>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  About
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  type="primary"
                  style={{
                    backgroundColor: "#F79438",
                    border: "none",
                    borderRadius: "30px",
                    width: "190px",
                  }}
                  size="large"
                  block
                >
                  Login
                </Button>
              </Col>
            </Row>
          </Row>
        </Header>
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
        {/*
        <Layout
          style={{
            backgroundColor: "#F69438",
            borderRadius: "50px",
            height: "100vh",
          }}
        />
        */}
      </Layout>
    </>
  );
};

export default PublicMainLayout;
