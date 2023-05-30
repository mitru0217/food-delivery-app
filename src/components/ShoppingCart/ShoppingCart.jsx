import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Button, Row, Modal, Typography, Col, List } from 'antd';
import UserData from '../UserData';
import ProductCard from '../ProductCard';

const modalRoot = document.getElementById('modal-root');

const ShoppingCart = ({ closeModal }) => {
  const [isCartOpened, setIsCartOpened] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setIsCartOpened(true);
    const storedItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedItems) {
      setCartItems(storedItems);
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('cartItems');
    };

    window.onbeforeunload = handleBeforeUnload;

    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  const handleRemoveItem = itemId => {
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

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
        <Row gutter={16}>
          <Col span={12}>
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
          <Col span={12}>
            <div
              style={{
                border: '1px solid #000',
                borderRadius: '10px',
                padding: '16px',
              }}
            >
              <List
                style={{ paddingTop: 90 }}
                dataSource={cartItems}
                grid={{ gutter: [16, 24], column: 3 }}
                renderItem={item => (
                  <Row gutter={[16, 24]}>
                    <List.Item>
                      <Col span={8} style={{ width: '100%' }}>
                        <ProductCard
                          item={item}
                          onClick={() => handleRemoveItem(item.id)}
                          isInShoppingCart={true}
                        />
                      </Col>
                    </List.Item>
                  </Row>
                )}
              />
            </div>
          </Col>
        </Row>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginTop: '16px',
          }}
        >
          <span style={{ marginRight: '128px' }}>Total price</span>
          <Button type="primary">Submit</Button>
        </div>
      </div>
    </Modal>,
    modalRoot
  );
};

export default ShoppingCart;

{
  /* <Space direction="vertical" size="large">
  <div style={{ padding: '20px' }}>
    <Row gutter={16}>
      <Col span={12}>
        <Input placeholder="Инпут 1" />
      </Col>
      <Col span={12}>
        <Input placeholder="Инпут 2" />
      </Col>
      <Col span={12}>
        <Input placeholder="Инпут 3" />
      </Col>
      <Col span={12}>
        <Input placeholder="Инпут 4" />
      </Col>
      <Col span={12} offset={12}>
        <div style={{ border: '1px solid #e8e8e8', padding: '10px' }}>
          Корзина
        </div>
      </Col>
    </Row>
    <Row gutter={16} style={{ marginTop: '20px' }}>
      <Col span={24}>
        <Button type="primary" style={{ float: 'right' }}>
          Submit
        </Button>
      </Col>
    </Row>
  </div>

  <Space>
    <Button type="primary" onClick={() => setIsCartOpened(true)}>
      Checkout
    </Button>
  </Space>
</Space>; */
}
