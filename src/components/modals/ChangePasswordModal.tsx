import React, { useState }  from "react";
import { Button, Modal } from "antd";
import ChangePasswordLayout from "./ChangePasswordLayout";

const ChangePasswordModal = () =>{
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
        <span style={{marginLeft:"-30%"}}>
            Change Password
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
        <ChangePasswordLayout/>
      </Modal>
        </>
    )
}

export default ChangePasswordModal;