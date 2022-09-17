import React, { useState } from "react";
import { Row, Col, Button, Modal } from "antd";
import LoginForm from "./LoginForm";
import Picture from "../../app/assets/images/login_picture.png";

const LoginModal = () => {
  const [isMainModel, setMainModel] = useState(false);
  return (
    <>
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
        onClick={() => setMainModel(true)}
      >
        Login
      </Button>
      <Modal
        visible={isMainModel}
        onOk={() => setMainModel(false)}
        onCancel={() => setMainModel(false)}
        footer={null}
        maskClosable={false}
        width="50%"
        className="log-in-modal"
      >
        <br />
        <br />
        <Row>
          <Col span={12}>
            <img
              src={Picture}
              alt=""
             // width="75%"
              className="login-picture"
            />
          </Col>
          <Col span={12}>
            <LoginForm />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default LoginModal;
