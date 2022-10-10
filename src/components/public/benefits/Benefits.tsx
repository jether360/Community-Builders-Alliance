import React from "react";
import { Row, Col } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import Picture from "../../../app/assets/images/benefits-picture.png";

const Benefits = () => {
  return (
    <>
      <Row id="benefits" align="middle">
        <Row>
          <Col span={12}>
            <h1 className="h1-benefits">Benefits for you</h1>
            <Row gutter={25}>
              <Col>
                <CheckOutlined className="benefits-icon"/>
              </Col>
              <Col>
                <h4 className="h4-benefits">Company ID</h4>
              </Col>
            </Row>
            <Row gutter={25}>
              <Col>
                <CheckOutlined className="benefits-icon"/>
              </Col>
              <Col>
                <h4 className="h4-benefits">5-10% Total Construction Cost Discount</h4>
              </Col>
            </Row>
            <Row gutter={25}>
              <Col>
                <CheckOutlined className="benefits-icon"/>
              </Col>
              <Col>
                <h4 className="h4-benefits"><span>&#8369;</span>50,000 House Calamity Assistance</h4>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col>
                <CheckOutlined className="benefits-icon"/>
              </Col>
              <Col>
                <h4 className="h4-benefits"><span>&#8369;</span>10,000 Personal Accident Death Insurance</h4>
              </Col>
            </Row>
            <Row gutter={25}>
              <Col>
                <CheckOutlined className="benefits-icon"/>
              </Col>
              <Col>
                <h4 className="h4-benefits">Business Opportunity and Unlimited Income</h4>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <img
              src={Picture}
              width="75%"
              style={{ mixBlendMode: "multiply",marginLeft:"15%" }}
              alt=""
            />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default Benefits;
