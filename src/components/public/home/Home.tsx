import React from "react";
import { Row, Col } from "antd";
import Picture from "../../../app/assets/images/homepage_picture.png";

const Home = () => {
  return (
    <>
    <Row justify="space-between">
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
        <img src={Picture} width="75%" style={{marginLeft:"15%",mixBlendMode:"multiply"}} alt=""/>
      </Col>
    </Row>
    </>
  );
};

export default Home;
