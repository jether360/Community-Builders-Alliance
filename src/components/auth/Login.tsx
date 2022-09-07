import React from "react";
import { signInWithGoogle, signInWithFacebook } from "../../app/stores/commonStore";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { Layout, Row, Col } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  return (
    <>
      <Layout style={{ height: "80vh", backgroundColor: "#fff" }}>
        <Content>
      <Row
        justify="center"
        align="middle"
        style={{ height: "100%", backgroundColor: "#fff" }}
      >
        <Col>
        <GoogleLoginButton onClick={signInWithGoogle}/>
        <br></br>
        <FacebookLoginButton onClick={signInWithFacebook}/>
        </Col>
        <button onClick={()=> history.push("/test")}>CLick me</button>
      </Row>
      </Content>
      </Layout>
    </>
  );
};

export default Login;
