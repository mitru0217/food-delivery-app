// import PropTypes from 'prop-types';
import { List } from 'antd';
import PartnerCard from '../PartnerCard';

const PartnersList = ({ partners, onClick }) => {
  return (
    <List
      dataSource={partners}
      renderItem={item => (
        <List.Item key={item.id}>
          <PartnerCard hoverable item={item} onClick={onClick} />
        </List.Item>
      )}
    />
  );
};

// PartnersList.propTypes = {
//   partners: PropTypes.array.isRequired,
// };

export default PartnersList;
