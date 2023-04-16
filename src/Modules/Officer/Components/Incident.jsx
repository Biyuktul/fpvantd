import { useState } from 'react';
import { Table, Button, Input, Select, Tag, Popover, Form, InputNumber, Modal } from 'antd';
import { DatePicker, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ReportTable from './ReportTable';
import MapComponent from './Map';
const { Option } = Select;

const Incidents = () => {
  const [incidents, setIncidents] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [statusFilter, setStatusFilter] = useState('All');
  const [selectedIncident, setSelectedIncident] = useState(null);
	const [addVisible, setAddVisible] = useState(false);
  const [detailVisible, setDetailVisible] = useState(false);
	
  
  const handleRowClick = (incident) => {
    setSelectedIncident(incident);
    setDetailVisible(true);
  };

	const data = [
	{
		id: '1',
		type: 'Assault',
		location: 'New York',
		date: '2023-04-15',
		status: 'Open',
	},
	{
		id: '2',
		type: 'Robbery',
		location: 'Los Angeles',
		date: '2023-04-14',
		status: 'Closed',
	},
	{
		id: '3',
		type: 'Burglary',
		location: 'Chicago',
		date: '2023-04-13',
		status: 'Open',
	},
	];

	const columns = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Type',
		dataIndex: 'type',
		key: 'type',
	},
	{
		title: 'Location',
		dataIndex: 'location',
		key: 'location',
	},
	{
		title: 'Date',
		dataIndex: 'date',
		key: 'date',
	},
	{
		title: 'Status',
		dataIndex: 'status',
		key: 'status',
		filters: [
		{
			text: 'Open',
			value: 'Open',
		},
		{
			text: 'Closed',
			value: 'Closed',
		},
		],
		onFilter: (value, record) => record.status === value,
		render: (status) => {
		const color = status === 'Open' ? 'green' : 'volcano';
		return <Tag color={color}>{status}</Tag>;
		},
	},
	];
  const handleModalClose = () => {
    setSelectedIncident(null);
    setDetailVisible(false);
  }; 

  const handleExport = () => {
    // do some operation here
  }
	const handleOk = (values) => {
    const newIncident = {
      caseType: values.caseType,
      status: values.status,
      priority: values.priority,
      date: values.date,
      description: values.description,
      victims: [
        {
          name: values.victimName,
          age: values.victimAge,
          gender: values.victimGender,
          contact: values.victimContact,
        },
      ],
      witnesses: [
        {
          name: values.witnessName,
          age: values.witnessAge,
          gender: values.witnessGender,
          contact: values.witnessContact,
          statement: values.witnessStatement,
        },
      ]
    };
    console.log(values);
    setIncidents([...incidents, newIncident]);
    setAddVisible(false);
  
  };

	const handleSearch = (value) => {
		setSearchText(value);
	};
	const handleVisibleChange = (visible) => {
		setAddVisible(visible);
	};


  	const filteredData = data.filter((record) => {
		const caseType = record.type.toLowerCase();
		const search = searchText.toLowerCase();
		return caseType.includes(search) && (statusFilter === 'All' || record.status === statusFilter);
  	});

  const content = (
        <Form layout="vertical" onFinish={handleOk}>
          <Row gutter={24}>
    <Col span={12}>
      <Form.Item label="Type" name="caseType" rules={[{ required: true, message: 'Please enter case type' }]}>
        <Input placeholder="Enter case type" />
      </Form.Item>
    </Col>
    <Col span={12}>
      <Form.Item label="Status" name="status" rules={[{ required: true, message: 'Please select status' }]}>
        <Select defaultValue="Open">
          <Option value="Open">Open</Option>
          <Option value="Closed">Closed</Option>
        </Select>
      </Form.Item>
    </Col>
  </Row>
  <Row gutter={24}>
    <Col span={12}>
      <Form.Item label="Priority" name="priority" rules={[{ required: true, message: 'Please enter priority' }]}>
        <InputNumber min={1} max={10} />
      </Form.Item>
    </Col>
    <Col span={12}>
      <Form.Item label="Date" name="date" rules={[{ required: true, message: 'Please select date' }]}>
        <DatePicker />
      </Form.Item>
    </Col>
  </Row>
  <Row gutter={24}>
    <Col span={24}>
      <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please enter description' }]}>
        <Input.TextArea rows={4} placeholder="Enter description" />
      </Form.Item>
    </Col>
  </Row>
  <Row gutter={24}>
    <Col span={12}>
      <Form.Item label="Victims">
        <Input.Group compact>
          <Form.Item name="victimName" noStyle>
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item name="victimAge" noStyle>
            <InputNumber placeholder="Age" />
          </Form.Item>
          <Form.Item name="victimGender" noStyle>
            <Input placeholder="Gender" />
          </Form.Item>
          <Form.Item name="victimContact" noStyle>
            <Input placeholder="Contact information" />
          </Form.Item>
        </Input.Group>
      </Form.Item>
    </Col>
    <Col span={12}>
      <Form.Item label="Witnesses">
        <Input.Group compact>
          <Form.Item name="witnessName" noStyle>
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item name="witnessAge" noStyle>
            <InputNumber placeholder="Age" />
          </Form.Item>
          <Form.Item name="witnessGender" noStyle>
            <Input placeholder="Gender" />
          </Form.Item>
          <Form.Item name="witnessContact" noStyle>
            <Input placeholder="Contact information" />
          </Form.Item>
          <Form.Item name="witnessStatement" noStyle>
            <Input.TextArea rows={4} placeholder="Witness statement" />
          </Form.Item>
        </Input.Group>
      </Form.Item>
    </Col>
  </Row>
          <Form.Item>
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      );
      
    
      return (
        <div className="flex flex-col h-full">
      <div className="mb-4 flex items-center w-1/2 justify-center">
        <Input.Search
          placeholder="Search by case type"
          allowClear 
          onChange={(e) => handleSearch(e.target.value)} 
          style={{width: 450, marginTop: 20}}
        />
        <Popover content={content} title="Add Incident" trigger="click" visible={addVisible} onVisibleChange={handleVisibleChange}>
          <Button 
            type={'primary'} 
            icon={<PlusOutlined />} 
            style={{width: '50px', 
            backgroundColor: '#1677ff', 
            marginTop: 20,
            marginLeft: 10
          }}
          />

        </Popover>
      </div>
      <div className="flex-grow mr-15">
        <Table dataSource={filteredData} columns={columns} onRow={(record) => ({ onClick: () => handleRowClick(record) })} />
          <MapComponent />
      </div>

      {selectedIncident && (
        <Modal 
          visible={detailVisible} 
          onCancel={handleModalClose} 
          footer={[
            <Button key="export" type="primary" onClick={handleExport} style={{backgroundColor: '#1677ff'}}>
              Export
            </Button>,
          ]}
          >
          <h2>Incident Details</h2>
          <p>Icident Type: {selectedIncident.caseType}</p>
          <p>Status: {selectedIncident.status}</p>
          <p>Date: {selectedIncident.date}</p>
          <p>Victim name: {selectedIncident.name}</p>
          <p>Victim contact: {selectedIncident.contact}</p>
          <p>Wittness Name: {selectedIncident.name}</p>
          <p>Wittness contact: {selectedIncident.contact}</p>
        </Modal>
      )}
    </div>
      );
    };
    
    export default Incidents;