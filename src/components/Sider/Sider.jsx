import { Layout, Space, Typography } from 'antd';
const { Title } = Typography;
import PartnersList from '../PartnersList';

const Sider = () => {
  const siderStyle = {
    paddingInline: 20,
    paddingTop: 20,
    backgroundColor: '#7cb305',
    textAlign: 'center',
    width: '100%',
    overflowY: 'auto',
    height: 'calc(100vh - 100px)',
  };

  return (
    <Layout.Sider style={siderStyle} width={500}>
      <Space direction="vertical">
        <Title level={2}> Our Partners</Title>
        <PartnersList />
      </Space>
    </Layout.Sider>
  );
};

export default Sider;
