import React, { useState } from "react";
import { Button, Modal } from "antd";
import ProfileLayout from "./ProfileLayout";


const Profile = () =>{
    const [isMainModel, setMainModel] = useState(false);

    return(
        <>
         <Button
        type="primary"
        style={{
          backgroundColor: "transparent",
          border: "none",
          color:"black",
          boxShadow:"none"
        }}
        block
        onClick={() => setMainModel(true)}
      >
        <span style={{marginLeft:"-90%"}}>
        Profile
        </span>
      </Button>
        <Modal
        visible={isMainModel}
        onOk={() => setMainModel(false)}
        onCancel={() => setMainModel(false)}
        footer={null}
        maskClosable={false}
        width="50%"
        className="profile-modal"
      > 
        <ProfileLayout/>
      </Modal>
        </>
    )
}

export default Profile;