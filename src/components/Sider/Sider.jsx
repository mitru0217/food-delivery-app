import { Layout, Space, Card } from 'antd';

import McDonalds from '../../assets/images/partners/Mc Donalds.png';
import BurgerKing from '../../assets/images/partners/Burger King.png';
import PizzaHut from '../../assets/images/partners/Pizza Hut.png';
import Sushi from '../../assets/images/partners/Sushi.png';

const Sider = () => {
  const siderStyle = {
    paddingInline: 20,
    paddingTop: 20,
    backgroundColor: '#7cb305',
    minHeight: '100vh',
    textAlign: 'center',
    width: '100%',
  };
  return (
    <Layout.Sider style={siderStyle} width={500}>
      <Space direction="vertical">
        <Card title="MacDonalds">
          <img alt="mcdonalds" src={McDonalds} style={{ width: '100%' }} />
        </Card>
        <Card title="Burger King">
          <img alt="burger king" src={BurgerKing} style={{ width: '100%' }} />
        </Card>
        <Card title="Pizza Hut">
          <img alt="pizza hut" src={PizzaHut} style={{ width: '100%' }} />
        </Card>
        <Card title="Sushi" style={{ width: '300px', height: '350px' }}>
          <img alt="pizza hut" src={Sushi} style={{ width: '100%' }} />
        </Card>
      </Space>
    </Layout.Sider>
  );
};

export default Sider;
