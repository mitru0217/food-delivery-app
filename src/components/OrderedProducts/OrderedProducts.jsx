import { useState, useEffect } from 'react';
import {
  Button,
  Typography,
  Col,
  List,
  InputNumber,
  Space,
  Divider,
} from 'antd';
import { useBadgeCountStore } from '../../zustand/store';
import ProductCard from '../ProductCard';

const initialState = () => {
  const data = localStorage.getItem('cartItems');
  const parsedData = JSON.parse(data);
  let total = 0;
  for (let i = 0; i < parsedData.length; ++i) {
    const price = parsedData[i].price;
    total += price;
  }
  return total;
};

const OrderedProducts = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(initialState());
  const setBadgeCount = useBadgeCountStore(state => state.setBadgeCount);
  const [isCartOpened, setIsCartOpened] = useState(true);

  useEffect(() => {
    setIsCartOpened(true);
    const storedItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedItems) {
      setCartItems(storedItems);
      setBadgeCount(storedItems.length);
    }
  }, [setBadgeCount]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('cartItems');
    };
    window.onbeforeunload = handleBeforeUnload;
    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  const calculateTotalPrice = items => {
    const totalPrice = items.reduce((acc, item) => {
      const itemTotal = item.price * (item.quantity || 1);
      return acc + itemTotal;
    }, 0);
    return totalPrice;
  };

  const handleRemoveItem = itemId => {
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    const totalPrice = calculateTotalPrice(updatedItems);
    setTotal(totalPrice);
    setBadgeCount(updatedItems.length);
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      setBadgeCount(cartItems.length);
    } else {
      setBadgeCount(0);
    }
  }, [cartItems, setBadgeCount]);

  const onChangeTotalPrice = (value, itemId) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: value,
        };
      }
      return item;
    });
    setCartItems(updatedItems);
    const totalPrice = calculateTotalPrice(updatedItems);
    setTotal(totalPrice);
  };

  return (
    <>
      <Col span={16}>
        <div
          style={{
            border: '1px solid #000',
            borderRadius: '10px',
            padding: '20px',
            overflowY: 'auto',
            height: 'calc(100vh - 100px)',
          }}
        >
          <Space
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: '16px',
              marginBottom: '16px',
              paddingLeft: '50px',
            }}
          >
            <span style={{ marginRight: '50px' }}>Total price: {total}</span>
            <Button type="primary">Submit</Button>
          </Space>
          <Divider />
          <List
            dataSource={cartItems}
            grid={{ column: 3 }}
            renderItem={item => (
              <Space
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <List.Item>
                  <Col span={17}>
                    <ProductCard
                      item={item}
                      onClick={() => handleRemoveItem(item.id)}
                      isInShoppingCart={true}
                    />
                  </Col>
                  <Typography>Quantity</Typography>
                  <InputNumber
                    style={{
                      marginTop: '10px',
                    }}
                    min={1}
                    max={1000}
                    defaultValue={1}
                    onChange={value => onChangeTotalPrice(value, item.id)}
                  />
                </List.Item>
              </Space>
            )}
          />
        </div>
      </Col>
    </>
  );
};

export default OrderedProducts;
