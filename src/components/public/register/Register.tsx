import React from "react";
import {Col,Row} from "antd";
import * as Yup from "yup";
import { Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";


const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    username: Yup.string().required("Required"),
    phonenumber: Yup.string().required("Required"),
    password: Yup.string().required("Required").min(6,"Password must be at 6 character long"),
    confirmPassword: Yup.string().required("Password is mandatory").oneOf([Yup.ref('password')],"Password does not match"),
  });

const Register = () =>{
    return(
        <>
        <h1 className="login-h1">Welcome!</h1>
        <h3>Sign up</h3>
             <Formik
            enableReinitialize
            validationSchema={validationSchema}
            initialValues={{
                name: "",
                email: "",
                username: "",
                phonenumber: "",
                password: "",
                confirmPassword:"",
                referrer: "",
            }}
            onSubmit={(value, { resetForm }) => {
              console.log(value);
            }}
          >
            {() => (
              <Form layout="horizontal">
                <Form.Item name="name" >
                  <Input
                    name="name"
                    placeholder="Name"
                    size="large"
                    suffix
                  />
                </Form.Item>
                <Form.Item name="email" >
                  <Input
                    name="email"
                    placeholder="Email"
                    size="large"
                    suffix
                  />
                </Form.Item>
                <Form.Item name="username" >
                  <Input
                    name="username"
                    placeholder="Username"
                    size="large"
                    suffix
                  />
                </Form.Item>
                <Form.Item name="phonenumber" >
                  <Input
                    name="phonenumber"
                    placeholder="Phone Number"
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
                <Form.Item name="confirmPassword">
                  <Input.Password
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    size="large"
                    suffix
                  />
                </Form.Item>
                <Form.Item name="referrer">
                  <Input
                    name="referrer"
                    placeholder="Referrer (Optional)"
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
                  Sign Up
                </SubmitButton>
                </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </>
    )
}

export default Register;