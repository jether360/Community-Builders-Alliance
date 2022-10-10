import React from "react";
import { Layout, Row, Col } from "antd";
import { RouteComponentProps } from "react-router-dom";
import { Link } from "react-scroll";
import MainFooter from "./footer/MainFooter";
import LoginModal from "../modals/LoginModal";


const { Content, Header, Footer } = Layout;

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
          className="header-curve"
        >
          <Row gutter={55} justify="end" className="row-nav">
            <Col>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="public-nav"
              >
                About Us
              </Link>
            </Col>
            <Col>
              <Link
                to="benefits"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="public-nav"
              >
                Benefits
              </Link>
            </Col>

            <Col>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="public-nav"
              >
                Special Offers
              </Link>
            </Col>
            <Col>
              <LoginModal />
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
        <Footer
          style={{
            backgroundColor: "#202020",
            height: "495px",
            marginTop: "15%",
          }}
        >
          <MainFooter />
        </Footer>
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
