import PropTypes from 'prop-types';

import { Card, Skeleton } from 'antd';

const PartnerCard = ({ item, onClick }) => {
  const { name, image } = item;
  const isLoading = false;
  if (isLoading) {
    return (
      <Card style={{ width: '300px', height: '350px' }}>
        <Skeleton active />
      </Card>
    );
  }
  return (
    <Card
      hoverable
      title={name}
      style={{ width: '300px', height: '350px' }}
      onClick={() => onClick(item)}
    >
      <img src={image} alt={name} style={{ width: '100%' }} />
    </Card>
  );
};

PartnerCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default PartnerCard;
