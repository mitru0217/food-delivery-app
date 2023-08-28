import { useState, useEffect } from 'react';
import { getProductsByPartner } from '../../api/services/apiProducts';
import { getAllPartners } from '../../api/services/apiPartners';
import Loader from '../../components/Loader/Loader';
import { List } from 'antd';
import PartnerCard from '../PartnerCard';
import { useShopStore } from '../../zustand/store';

const PartnersList = () => {
  const {
    partners,
    selectedPartner,
    setPartners,
    setProducts,
    setSelectedPartner,
    setError,
  } = useShopStore();

  const [isLoading, setIsLoading] = useState(false);

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
        setError({ error });
      }
    };
    setIsLoading(false);
    getPartners();
  }, [setPartners, setError]);

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
  }, [setProducts, setError, selectedPartner]);

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

  return (
    <>
      {isLoading && <Loader />}
      <List
        dataSource={partners}
        renderItem={item => (
          <List.Item key={item.id}>
            <PartnerCard
              hoverable
              item={item}
              onClick={handlePartnerCardClick}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default PartnersList;
