import React from "react";
import { Layout, Button, Row, Col } from "antd";
import { RouteComponentProps } from "react-router-dom";

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
        style={{ backgroundColor: "#E6E6E6", height: "100vh", margin: "auto" }}
      >
        <Header style={{ backgroundColor: "#E6E6E6" }}>
          <Row justify="end">
            <Col>
              <Button
                type="primary"
                style={{
                  backgroundColor: "#F79438",
                  border: "none",
                  borderRadius: "30px",
                  width:"190px"
                }}
                size="large"
                block
              >
                Login
              </Button>
            </Col>
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
        <Layout
          style={{
            backgroundColor: "#F69438",
            borderRadius: "50px",
            height: "100vh",
          }}
        />
      </Layout>
    </>
  );
};

export default PublicMainLayout;
