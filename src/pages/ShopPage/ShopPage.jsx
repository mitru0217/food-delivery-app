import { useState, useEffect } from 'react';
import { Layout, Affix } from 'antd';

import Header from '../../components/Header';
import Sider from '../../components/Sider';
import ShoppingCart from '../../components/ShoppingCart';
import Content from '../../components/Content';
import { getAllPartners } from '../../api/services/apiPartners';
import { getProductsByPartner } from '../../api/services/apiProducts';
import Loader from '../../components/Loader/Loader';

const ShopPage = () => {
  const [partners, setPartners] = useState([]);
  const [products, setProducts] = useState([]);
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPartners = async () => {
      try {
        setIsLoading(true);
        let { data: partners, error } = await getAllPartners();
        if (error) {
          throw new Error(error.message);
        }
        setPartners(partners);
      } catch (error) {
        console.error(error.message);
      }
    };
    setIsLoading(false);
    getPartners();
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      if (selectedPartner !== null) {
        try {
          setIsLoading(true);
          let { data: products, error } = await getProductsByPartner(
            selectedPartner
          );
          if (error) {
            throw new Error(error.message);
          }
          setProducts(products);
        } catch (error) {
          setError({ error });
        }
      }
    };

    setIsLoading(false);
    getProduct();
  }, [selectedPartner]);

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
      setError({ error });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePartnerCardClick = async partner => {
    const partnerId = partner.id;
    setSelectedPartner(partnerId);
    if (partnerId !== null) {
      await getProduct(partnerId);
    }
  };

  const handleOrderButtonClick = () => {
    setOrderModalOpen(true);
  };

  return (
    <>
      {isLoading && <Loader />}
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
        <Layout hasSider style={{ overflow: 'auto', flex: '1' }}>
          <Sider partners={partners} onClick={handlePartnerCardClick} />
          <Content products={products} />
        </Layout>
        {isOrderModalOpen && (
          <ShoppingCart closeModal={() => setOrderModalOpen(false)} />
        )}
      </Layout>
    </>
  );
};

export default ShopPage;
