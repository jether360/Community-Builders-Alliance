import React from "react";
import { Row, Col } from "antd";


const ProfileLayout = () =>{
    return(
        <>
            <Row>
                <Col>
                    <h1>Profile</h1>
                </Col>
            </Row>
            <Row justify="space-between">
                <Col>
                    <h3 className="profile-h3">Name: <b>Juan Dela Cruz</b></h3>
                </Col>
                <Col>
                    <h3 className="profile-h3">Occupation: <b>House Husband</b></h3>
                </Col>
            </Row>
            <Row justify="space-between"> 
                <Col>
                    <h3 className="profile-h3">Address: <b>P1 Valencia City</b></h3>
                </Col>
                <Col>
                    <h3 className="profile-h3">Contact Number: <b>09374333333</b></h3>
                </Col>
            </Row>
            <Row justify="space-between">
                <Col>
                    <h3 className="profile-h3">Age: <b>25</b></h3>
                </Col>
                <Col>
                    <h3 className="profile-h3">Sponsor: <b>Cardo Dalisay</b></h3>
                </Col>
            </Row>
            <Row justify="space-between">
                <Col>
                    <h3 className="profile-h3">Gender: <b>Male</b></h3>
                </Col>
                <Col>
                    <h3 className="profile-h3">Sponsor Account No.: <b>868476</b></h3>
                </Col>
            </Row>
            <Row justify="space-between">
                <Col>
                    <h3 className="profile-h3">Civil Status: <b>Married</b></h3>
                </Col>
                <Col>
                    <h3 className="profile-h3">Your Account No.: <b>232376</b></h3>
                </Col>
            </Row>
        </>
    )
}

export default ProfileLayout;