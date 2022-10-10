import React from "react";
import { Row, Col } from "antd";

const MainFooter = () => {
  return (
    <>
      <Row justify="space-between">
        <Col>
          <h1
            style={{
              color: "#FFFFFF",
              fontFamily: "Mohave",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "40px",
            }}
          >
            Community Builders Alliance
          </h1>
        </Col>
        <Col>
          <h1
            style={{
              color: "#FFFFFF",
              fontFamily: "Mohave",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "40px",
            }}
          >
            Contacts
          </h1>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col >
          <h3 style={{color:"#FFFFFF"}}>2nd Floor Villahermosa Building <br/> Valencia City Bukidnon Ph.</h3>
        </Col>
        <Col >
            <h3 style={{color:"#FFFFFF"}}>09676700000 TM</h3>
            <h3 style={{color:"#FFFFFF"}}>09676700000 DITO</h3>
        </Col>
      </Row>
    </>
  );
};

export default MainFooter;
