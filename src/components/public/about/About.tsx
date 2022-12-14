import React from "react";
import { Row, Col } from "antd";
import Picture from "../../../app/assets/images/about_us.png";


const About = () => {
  return (
    <>
      <Row  id="about" align="middle" className="about-row">
        <Col span={12} className="about-picture">
          <img
            src={Picture}
            width="70%"
            style={{ mixBlendMode: "multiply",marginTop:"10%" }}
            alt=""
          />
           <h1 className="vision-header"> Vision</h1>
           <h1 className="about-text">
            Aliquip veniam anim enim occaecat excepteur occaecat qui ad
            exercitation deserunt in. Cillum officia esse deserunt ullamco
            nostrud velit fugiat elit ullamco nostrud Lorem ea. Incididunt sint
            esse proident ullamco ea minim nisi aute voluptate ullamco. Nisi
            minim anim nostrud id velit velit in amet. Sunt enim quis nulla aute
            proident eu aliqua ullamco.
          </h1>
        </Col>
        <Col span={12} className="about-col">
          <h1 className="about-text">
            Aliquip veniam anim enim occaecat excepteur occaecat qui ad
            exercitation deserunt in. Cillum officia esse deserunt ullamco
            nostrud velit fugiat elit ullamco nostrud Lorem ea. Incididunt sint
            esse proident ullamco ea minim nisi aute voluptate ullamco. Nisi
            minim anim nostrud id velit velit in amet. Sunt enim quis nulla aute
            proident eu aliqua ullamco.
          </h1>
          <h1 className="mission-header">Mission</h1>
        </Col>
      </Row>
    </>
  );
};

export default About;
