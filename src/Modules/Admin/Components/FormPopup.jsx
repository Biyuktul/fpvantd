import { useState, useEffect } from 'react';
import { Button, Modal, Form, Input } from 'antd';

const PopupFormButton = ({text, formTitle, selectedEmployee}) => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    if (selectedEmployee) {
      form.setFieldsValue({
        id: selectedEmployee.id,
        name: selectedEmployee.name,
        email: selectedEmployee.email,
        department: selectedEmployee.department,
        salary: selectedEmployee.salary,
      });
    }
  }, [selectedEmployee, form]);
  
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  const handleCancel = () => {
    setVisible(false);
  };
  const handleOk = (values) => {
    console.log('Received values of form:', values);
    setVisible(false);
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  return (
    <>
      <Button onClick={() => setVisible(true)}>{text}</Button>
      <Modal
        visible={visible}
        title={formTitle}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            htmlType="submit"
            form="myForm"
            onClick={handleOk}
          >
            Add
          </Button>,
        ]}
      >
        <Form form={form}
          {...layout}
          name="myForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Input 1"
            name="id"
            rules={[
              {
                required: true,
                message: 'Please input input 1!',
              },
            ]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="Input 2"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input input 2!',
              },
            ]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label="Input 3"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input input 3!',
              },
            ]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label="Input 4"
            name="department"
            rules={[
              {
                required: true,
                message: 'Please input input 4!',
              },
            ]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label="Input 5"
            name="salary"
            rules={[
              {
                required: true,
                message: 'Please input input 5!',
              },
            ]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label="Input 6"
            name="input6"
            rules={[
              {
                required: true,
                message: 'Please input input 6!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Input 7"
            name="input7"
            rules={[
              {
                required: true,
                message: 'Please input input 7!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Input 8"
            name="input8"
            rules={[
              {
                required: true,
                message: 'Please input input 8!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Input 9"
            name="input9"
            rules={[
              {
                required: true,
                message: 'Please input input 9!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Input 10"
            name="input10"
            rules={[
              {
                required: true,
                message: 'Please input input 10!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* Add more Form.Item components for additional inputs */}
        </Form>
      </Modal>
    </>
  );
};


export default PopupFormButton;