import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Button, Space, Row, Modal, Typography } from 'antd';

const modalRoot = document.getElementById('modal-root');

const ShoppingCart = ({ closeModal }) => {
  const [isCartOpened, setIsCartOpened] = useState(true);

  useEffect(() => {
    setIsCartOpened(true);
  }, []);

  return createPortal(
    <Modal
      onCancel={closeModal}
      open={isCartOpened}
      width={'100%'}
      footer={false}
    >
      <Space direction="vertical" size="large">
        <Typography.Title level={2}> Shopping Cart</Typography.Title>
        <Row gutter={[16, 24]}>...</Row>
        <Space>
          <Button type="primary" onClick={() => setIsCartOpened(true)}>
            Checkout
          </Button>
        </Space>
      </Space>
    </Modal>,
    modalRoot
  );
};

export default ShoppingCart;
