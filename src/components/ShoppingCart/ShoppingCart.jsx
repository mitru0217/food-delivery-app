import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Row, Col, Modal, Typography } from 'antd';

import OrderedProducts from '../OrderedProducts';
import UserData from '../UserData';
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
      <Typography.Title level={2}> Shopping Cart</Typography.Title>
      <div>
        <Row gutter={24}>
          <Col span={8}>
            <div
              style={{
                border: '1px solid #000',
                borderRadius: '10px',
                padding: '16px',
              }}
            >
              <UserData />
            </div>
          </Col>
          <OrderedProducts />
        </Row>
      </div>
    </Modal>,
    modalRoot
  );
};

export default ShoppingCart;
