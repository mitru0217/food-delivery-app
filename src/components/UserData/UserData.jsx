import { Form, Input } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const onFinish = values => {
  console.log(values);
};

const UserData = () => (
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['user', 'name']}
      label="Name"
      rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'phone']}
      label="Phone Number"
      rules={[
        {
          required: true,
          message: 'Please input your phone number!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'address']}
      label="Address"
      rules={[
        {
          required: true,
          message: 'Please input your address!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    {/* <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item> */}
  </Form>
);
export default UserData;
