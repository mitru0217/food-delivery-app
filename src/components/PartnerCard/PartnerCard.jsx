import PropTypes from 'prop-types';
import { Card } from 'antd';

const PartnerCard = ({ title, imageSrc }) => {
  return (
    <Card title={title} style={{ width: '300px', height: '350px' }}>
      <img alt={title} src={imageSrc} style={{ width: '100%' }} />
    </Card>
  );
};

PartnerCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default PartnerCard;
