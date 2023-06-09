import { Layout, Affix } from 'antd';
import { useState } from 'react';
import Header from '../../components/Header';
import Sider from '../../components/Sider';
import ShoppingCart from '../../components/ShoppingCart';
import Content from '../../components/Content';

const ShopPage = () => {
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);

  const handleOrderButtonClick = () => {
    setOrderModalOpen(true);
  };

  return (
    <Layout
      style={{
        display: 'flex',
        flexDirection: 'column',

        minHeight: '100vh',
        width: '100vw',
      }}
    >
      <Affix>
        <Header onOrderButtonClick={handleOrderButtonClick} />
      </Affix>
      <Layout hasSider>
        <Sider />
        <Content />
      </Layout>
      {isOrderModalOpen && (
        <ShoppingCart closeModal={() => setOrderModalOpen(false)} />
      )}
    </Layout>
  );
};

export default ShopPage;
