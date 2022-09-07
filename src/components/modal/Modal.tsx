import React from 'react';
import { Modal as AntdModal } from 'antd';
import { useStore } from '../../app/stores/store';
import { observer } from 'mobx-react-lite';

const Modal = () => {
    const {modalStore} = useStore();
    const { modal, closeModal } = modalStore;

    return (
        <>
            <AntdModal
                visible={modal.show}
                onCancel={closeModal}
                footer={null}
                width={modal.width ? modal.width : 700}
            >
                {modal.body}
            </AntdModal>
        </>
    );
};

export default observer(Modal);