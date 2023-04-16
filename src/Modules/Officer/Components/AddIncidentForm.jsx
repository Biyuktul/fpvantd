import { Modal, Form, Input, DatePicker, Select } from 'antd';

const { Option } = Select;

const AddNewIncidentPopupForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Add New Incident"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form.validateFields().then((values) => {
          form.resetFields();
          onCreate(values);
        });
      }}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="type"
          label="Type"
          rules={[{ required: true, message: 'Please input the type of the incident!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="location"
          label="Location"
          rules={[{ required: true, message: 'Please input the location of the incident!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="date"
          label="Date"
          rules={[{ required: true, message: 'Please select the date of the incident!' }]}
        >
          <DatePicker showTime />
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: 'Please select the status of the incident!' }]}
        >
          <Select>
            <Option value="Open">Open</Option>
            <Option value="Closed">Closed</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddNewIncidentPopupForm;