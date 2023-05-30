import { Button, Space, Card, Typography } from 'antd';

const OrderedCard = ({ item, onClick }) => {
  return (
    <Card
      key={item.id}
      title={item.name}
      style={{ width: '300px', height: '350px' }}
    >
      <Space direction="vertical" align="end">
        <Typography>Price:{item.price}$</Typography>
        <Button type="primary" onClick={onClick}>
          Remove
        </Button>
      </Space>
    </Card>
  );
};

export default OrderedCard;
