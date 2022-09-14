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
            Community Builders <br />
            Alliance
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
            Visit Us
          </h1>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <h3 style={{color:"#FFFFFF"}}>2nd Floor Villahermosa Building <br/> Valencia City Bukidnon Ph.</h3>
        </Col>
        <Col span={12}>
          <p style={{color:"#FFFFFF"}}>
            Cupidatat magna minim est sint laborum aute dolore dolore
            adipisicing. Fugiat excepteur laborum elit tempor proident magna
            occaecat occaecat cillum qui incididunt cupidatat cupidatat ut.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default MainFooter;
