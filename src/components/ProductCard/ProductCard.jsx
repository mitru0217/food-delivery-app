// import { useState, useEffect } from 'react';

import { Button, Space, Card, Typography, Skeleton } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

const ProductCard = ({ item, onClick, isInShoppingCart }) => {
  const isLoading = false;
  if (isLoading) {
    return (
      <Card style={{ width: '300px', height: '350px' }}>
        <Skeleton active />
      </Card>
    );
  }

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  const handleRemoveFromCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedItems = cartItems.filter(cartItem => cartItem.id !== item.id);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  if (isLoading) {
    return (
      <Card style={{ width: '300px', height: '350px' }}>
        <Skeleton active />
      </Card>
    );
  }
  return (
    <Card
      hoverable
      key={item.id}
      title={item.name}
      onClick={onClick}
      style={{ width: '300px', height: '350px' }}
    >
      <Space direction="vertical" align="end">
        <img
          src={item.image}
          alt={item.name}
          style={{ width: '100%', height: '165px' }}
        />
        <Typography>Price:{item.price}$</Typography>
        {isInShoppingCart ? (
          <Button onClick={handleRemoveFromCart}>
            Delete from ShoppingCart
            <DeleteOutlined />
          </Button>
        ) : (
          <Button onClick={handleAddToCart}>
            Add to cart
            <PlusOutlined />
          </Button>
        )}
      </Space>
    </Card>
  );
};

export default ProductCard;
