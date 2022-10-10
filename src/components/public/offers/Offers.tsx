import React from "react";
import { Row, Col } from "antd";
import { BookOutlined} from "@ant-design/icons";

const Offers = () =>{
    return(
        <>
        <Row  id="offers" align="middle" style={{marginTop:"5%"}}>
        <Row>
          <Col>
            <h1 className="h1-benefits">Special Offers and Prices</h1>
            <Row gutter={25}>
              <Col>
                <BookOutlined className="benefits-icon"/>
              </Col>
              <Col>
                <h4 className="h4-benefits">Bellow Standard Finish <span>&#8369;</span>499,999 and below</h4>
              </Col>
            </Row>
            <br/>
            <Row gutter={25}>
              <Col>
                <BookOutlined className="benefits-icon"/>
              </Col>
              <Col>
                <h4 className="h4-benefits">Standard Finish <span>&#8369;</span>500,000 up to <span>&#8369;</span>999,999</h4>
              </Col>
            </Row>
            <br/>
            <Row gutter={25}>
              <Col>
                <BookOutlined className="benefits-icon"/>
              </Col>
              <Col>
                <h4 className="h4-benefits">Luxury Finish <span>&#8369;</span>1M up to <span>&#8369;</span>5M</h4>
              </Col>
            </Row>
            </Col>
        </Row>
        </Row>
        </>
    )
}

export default Offers;