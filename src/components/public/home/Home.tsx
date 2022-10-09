import React from "react";
import { Row, Col } from "antd";
import Picture from "../../../app/assets/images/homepage_picture.png";
import About from "../about/About";
import Logo from "../../../app/assets/images/cba-logo.png";

const Home = () => {
  return (
    <>
    <Row>
      <Col>
      <img src={Logo} width="50%" alt="" style={{marginLeft:"-17%"}}/>
      </Col>
      </Row>
      <Row justify="space-between" className="home-row">
        <Col>
          <h1
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: 40,
              color: "#F79438",
            }}
          >
            Community Builders <br />
            Alliance
          </h1>
          <p
            style={{
              fontStyle: "italic",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: 25,
              color: "#F79438",
            }}
          >
            "Building Homes, Hopes and Future"
          </p>
        </Col>
        <Col>
          <img
            src={Picture}
            width="75%"
            style={{ marginLeft: "15%", mixBlendMode: "multiply" }}
            className="home-picture"
            alt=""
          />
        </Col>
      </Row>
      <About />
    </>
  );
};

export default Home;
