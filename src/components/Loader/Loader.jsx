import { SmileOutlined } from '@ant-design/icons';

const backdrop = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
};

const loaderWrap = {
  position: 'absolute',
  bottom: '50%',
  left: '47%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Loader = () => {
  return (
    <div style={backdrop}>
      <div style={loaderWrap}>
        <SmileOutlined rotate={180} color="#8BAA36" size={85} />
      </div>
    </div>
  );
};

export default Loader;
