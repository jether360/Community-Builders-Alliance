import React from "react";
import { Card, Col, Layout, Row, message } from "antd";
import * as Yup from "yup";
import { Form, Input, SubmitButton } from "formik-antd";
import { Formik, Field } from "formik";
import { useHistory } from "react-router-dom";
import { db } from "../../app/stores/commonStore";
import { collection, addDoc, updateDoc, doc, serverTimestamp } from "firebase/firestore";

const validationSchema = Yup.object().shape({
  organizationName: Yup.string().required("Required"),
  organizationType: Yup.string().required("Required"),
  numberMembers: Yup.string().required("Required"),
  contestName: Yup.string().required("Required"),
});

const { Content } = Layout;

const CreateForm = () => {
  let history = useHistory();

  return (
    <>
      <Layout
        className="layout"
        style={{ backgroundColor: "#fff", marginTop: "20px" }}
      >
        <Content>
          <Row justify="center">
            <Col className="create-form-col">
              <Row justify="center" align="middle"></Row>
              <Card title="Create Contest" style={{ borderRadius: "8px" }}>
                <Formik
                  enableReinitialize
                  validationSchema={validationSchema}
                  initialValues={{
                    organizationName: "",
                    organizationType: "",
                    numberMembers: "",
                    contestName: "",
                  }}
                  onSubmit={async (value, { resetForm }) => {
                    try {
                      console.log(value);
                      resetForm();
                      const docRef = await addDoc(collection(db, "contest"), {
                        id: "",
                        organizationName: value.organizationName,
                        organizationType: value.organizationType,
                        numberMembers: value.numberMembers,
                        contestName: value.contestName,
                        posts: [],
                        timeStamp: serverTimestamp(),
                      });
                      console.log("Document written with ID: ", docRef.id);
                      const idRef = doc(db,"contest", `${docRef.id}`);
                      await updateDoc(idRef,{
                        id:`${docRef.id}`
                      })
                      history.push("/contest/" + docRef.id);
                      message.success("Create Contest Successfully", 5);
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  {() => (
                    <Form layout="vertical">
                      <Form.Item
                        name="organizationName"
                        label="Name of Organization"
                      >
                        <Input
                          name="organizationName"
                          placeholder="Name of Organization"
                          size="large"
                          suffix
                        />
                      </Form.Item>
                      <Form.Item
                        name="organizationType"
                        label="Type of Organization"
                      >
                        <Input
                          name="organizationType"
                          placeholder="Type of Organization"
                          size="large"
                          suffix
                        />
                      </Form.Item>
                      <Form.Item name="numberMembers" label="Number of Members">
                        <Field
                          as="select"
                          name="numberMembers"
                          style={{ width: "50%" }}
                        >
                          <option value="1-50">1-50</option>
                          <option value="51-100">51-100</option>
                          <option value="101-500">101-500</option>
                          <option value="501-1000">501-1000</option>
                          <option value="1000 Up">1000 Up</option>
                        </Field>
                      </Form.Item>
                      <Form.Item name="contestName" label="Contest Name">
                        <Input
                          name="contestName"
                          placeholder="Contest Name"
                          size="large"
                          suffix
                        />
                      </Form.Item>
                      <SubmitButton type="primary" size="large" block>
                        Submit
                      </SubmitButton>
                    </Form>
                  )}
                </Formik>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default CreateForm;
