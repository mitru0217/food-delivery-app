import { useState, useEffect } from 'react';
import { Layout, Space, List, Card } from 'antd';

import getPartners from '../../services/PartnersApi/PartnersApi';

const Sider = () => {
  const siderStyle = {
    paddingInline: 20,
    paddingTop: 20,
    backgroundColor: '#7cb305',
    // minHeight: '100vh',
    textAlign: 'center',
    width: '100%',
  };

  const [partners, setPartners] = useState([]);

  useEffect(() => {
    async function fetchPartners() {
      try {
        const result = await getPartners();
        setPartners(result);
      } catch (error) {
        error.message;
      }
    }

    fetchPartners();
  }, []);

  return (
    <Layout.Sider style={siderStyle} width={500}>
      <Space direction="vertical">
        <List
          dataSource={partners}
          renderItem={item => (
            <List.Item>
              <Card
                key={item.id}
                title={item.name}
                style={{ width: '300px', height: '350px' }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '100%' }}
                />
              </Card>
            </List.Item>
          )}
        />
      </Space>
    </Layout.Sider>
  );
};

export default Sider;
