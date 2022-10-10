import React from "react";
import {Col,Row} from "antd";
import * as Yup from "yup";
import { Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";


const validationSchema = Yup.object().shape({
    amount: Yup.number().integer().min(500).required("Enter Amount"),
  });


const WithdrawLayout = () =>{
    return(
        <>
            
      <h1>Withdraw</h1>
      <h2>
        <b>Total Income: 2500</b>
      </h2>
      <h2>
        <b>Withdrawable Balance: 2000</b>
      </h2>
      <br/>
      <Formik
            enableReinitialize
            validationSchema={validationSchema}
            initialValues={{
                amount: 0,
            }}
            onSubmit={(value, { resetForm }) => {
              console.log(value);
            }}
          >
            {() => (
              <Form layout="horizontal">
                <Form.Item name="amount" label="Enter Amount">
                  <Input
                    name="amount"
                    size="large"
                    suffix
                  />
                </Form.Item>
                <Row justify="center">
                    <Col>
                <SubmitButton
                  type="primary"
                  size="large"
                  style={{
                    width: "120%",
                    color:"black"
                  }}
                  className="login-button"
                  block
                >
                  Submit
                </SubmitButton>
                </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </>
    )
}

export default WithdrawLayout;