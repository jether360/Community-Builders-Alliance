import React from "react";
import { Row,Col } from "antd";
import * as Yup from "yup";
import { Form, Input, SubmitButton, } from "formik-antd";
import { Formik } from "formik";

const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Required"),
    newPassword: Yup.string().required("Required"),
    reTypePassword: Yup.string().required("Required"),
  });

const ChangePasswordLayout = () =>{
    return(
        <>
            <h1>Change Password</h1>
            <Formik
            enableReinitialize
            validationSchema={validationSchema}
            initialValues={{
                currentPassword:"",
                newPassword:"",
                reTypePassword: ""
            }}
            onSubmit={(value, { resetForm }) => {
              console.log(value);
            }}
          >
            {() => (
              <Form layout="vertical">
                <Form.Item name="currentPassword" label="Current Password">
                  <Input.Password
                    name="currentPassword"
                    size="large"
                    suffix
                  />
                </Form.Item>
                <Form.Item name="newPassword" label="New Password">
                  <Input.Password
                    name="newPassword"
                    size="large"
                    suffix
                  />
                </Form.Item>
                <Form.Item name="reTypePassword" label="Re-type New Password">
                  <Input.Password
                    name="reTypePassword"
                    size="large"
                    suffix
                  />
                </Form.Item>
                <Row justify="start">
                    <Col>
                <SubmitButton
                  type="primary"
                  size="large"
                  style={{color:"black",width:"190%"}}
                  className="login-button"
                  block
                >
                  Change
                </SubmitButton>
                </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </>
    )
}

export default ChangePasswordLayout;