import React from "react";
import {Col,Row} from "antd";
import * as Yup from "yup";
import { Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";


const validationSchema = Yup.object().shape({
    mobileNumber: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });


const LoginForm = () =>{
    return(
        <>
        <h1 className="login-h1">Welcome!</h1>
        <h3>Log in</h3>
          <Formik
            enableReinitialize
            validationSchema={validationSchema}
            initialValues={{
                mobileNumber: "",
                password: "",
            }}
            onSubmit={(value, { resetForm }) => {
              console.log(value);
            }}
          >
            {() => (
              <Form layout="horizontal">
                <Form.Item name="mobileNumber" >
                  <Input
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    size="large"
                    suffix
                  />
                </Form.Item>
                <Form.Item name="password">
                  <Input.Password
                    name="password"
                    placeholder="Password"
                    size="large"
                    suffix
                  />
                </Form.Item>
                <Row justify="start">
                    <Col>
                <SubmitButton
                  type="primary"
                  size="large"
                  style={{
                    width: "190%",
                  }}
                  className="login-button"
                  block
                >
                  Login
                </SubmitButton>
                </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </>
    )
}

export default LoginForm;
