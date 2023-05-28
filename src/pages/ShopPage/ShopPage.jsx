import { useState, useEffect } from 'react';
import { Layout, Affix } from 'antd';

import Header from '../../components/Header';
import Sider from '../../components/Sider';
import ShoppingCart from '../../components/ShoppingCart';
import Content from '../../components/Content';
import { getAllPartners } from '../../api/services/apiPartners';
import { getProductsByPartner } from '../../api/services/apiProducts';

const ShopPage = () => {
  const [partners, setPartners] = useState([]);
  const [products, setProducts] = useState([]);
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);

  useEffect(() => {
    const getPartners = async () => {
      try {
        let { data: partners, error } = await getAllPartners();
        if (error) {
          throw new Error(error.message);
        }
        setPartners(partners);
      } catch (error) {
        console.error(error.message);
      }
    };
    getPartners();
  }, []);

  const getProduct = async () => {
    try {
      let { data: products, error } = await getProductsByPartner(
        selectedPartner
      );
      if (error) {
        throw new Error(error.message);
      }
      setProducts(products);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handlePartnerCardClick = async partner => {
    const partnerId = partner.id;
    setSelectedPartner(partnerId);
    await getProduct(partnerId);
  };

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
        <Sider partners={partners} onClick={handlePartnerCardClick} />
        <Content products={products} />
      </Layout>
      {isOrderModalOpen && (
        <ShoppingCart closeModal={() => setOrderModalOpen(false)} />
      )}
    </Layout>
  );
};

export default ShopPage;
