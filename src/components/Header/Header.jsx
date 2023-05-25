import { Layout, Button, Space, Badge } from 'antd';
import PropTypes from 'prop-types';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

const Header = ({ onOrderButtonClick }) => {
  const headerStyle = {
    textAlign: 'start',
    height: 100,
    paddingInline: 50,
    backgroundColor: '#254000',
  };

  return (
    <Layout.Header style={headerStyle}>
      <Space size="middle">
        <Button type="primary">Shop</Button>
        <Badge color="green" count={5}>
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

Header.propTypes = {
  onOrderButtonClick: PropTypes.func.isRequired,
};

export default Header;
