import { Layout, Button, Space, Badge } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { useBadgeCountStore } from '../../zustand/store';

const Header = ({ onOrderButtonClick }) => {
  const headerStyle = {
    textAlign: 'start',
    height: 100,
    paddingInline: 50,
    backgroundColor: '#254000',
  };

  const badgeCount = useBadgeCountStore(state => state.badgeCount);

  return (
    <Layout.Header style={headerStyle}>
      <Space size="middle">
        <Button type="primary">Shop</Button>
        <Badge color="green" count={badgeCount}>
          <Button type="primary" onClick={onOrderButtonClick}>
            <ShoppingCartOutlined />
          </Button>
        </Badge>
        <Button>
          Log In
          <UserOutlined />
        </Button>
      </Space>
    </Layout.Header>
  );
};

export default Header;
