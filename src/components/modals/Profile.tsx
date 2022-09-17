import React, { useState } from "react";
import { Button, Modal } from "antd";


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
      >
        <h1>hi</h1>
      </Modal>
        </>
    )
}

export default Profile;