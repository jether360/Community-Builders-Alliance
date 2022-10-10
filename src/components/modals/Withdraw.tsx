import React, { useState } from "react";
import { Button, Modal } from "antd";
import WithdrawLayout from "./WithdrawLayout";

const Withdraw = () =>{

    const [isMainModel, setMainModel] = useState(false);

    return(
        <>
              <Button
        type="primary"
        style={{
          backgroundColor: "#F8E6D0",
          border: "1px solid #F69438",
          color:"black",
          borderRadius:"30px",
          width:"30vh",
          height:"7vh",
          fontSize:"22px"
        }}
        block
        onClick={() => setMainModel(true)}
      >   
        Withdraw
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
        <WithdrawLayout/>
      </Modal>
        </>
    )
}

export default Withdraw;