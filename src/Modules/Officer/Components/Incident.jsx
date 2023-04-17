import { useState, useEffect } from 'react';
import { Table, Button, Input, Select, Tag, Popover, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import MapComponent from './Map';
import NewIncident from './NewIncident';

const Incidents = () => {
  const [incidents, setIncidents] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [statusFilter, setStatusFilter] = useState('All');
  const [selectedIncident, setSelectedIncident] = useState(null);
	const [addVisible, setAddVisible] = useState(false);
  const [detailVisible, setDetailVisible] = useState(false);
  const [position, setPosition] = useState([9.0222, 38.7468]);
  const [location, setLocation] = useState('Addis Ababa');

  const apiKey = '47a1a977c1be42aab4956e1a035278f0';

  const getLocationCoordinates = (location) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}, Addis Ababa, Ethiopia&key=${apiKey}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.results[0] && data.results[0].geometry) {
          const { lat, lng } = data.results[0].geometry;
          console.log(`${lat} ${lng}`)
          setPosition([lat, lng]);
        } else {
          console.log("no location found")
        }
        
        
      })
      .catch(error => {
        console.error(error);
      });
  }

  
  const handleRowClick = (incident) => {
    setSelectedIncident(incident);
    setDetailVisible(true);
  };

	const data = [
	{
		id: '1',
		type: 'Assault',
		location: 'Unity University',
		date: '2023-04-15',
		status: 'Open',
	},
	{
		id: '2',
		type: 'Robbery',
		location: 'Arat Kilo',
		date: '2023-04-14',
		status: 'Closed',
	},
	{
		id: '3',
		type: 'Burglary',
		location: 'Kolfe Keranio',
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
    render: (text, record) => <a onClick={() => handleLocationClick(record)}>{text}</a>,

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
		render: (status, text, record) => {
		const color = status === 'Open' ? 'green' : 'volcano';
		return <Tag color={color} onClick={() => handleLocationClick(record)} >{status}</Tag>;
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

  const handleLocationClick = (record) => {
    getLocationCoordinates(record.location)
    // const { latitude, longitude } = record.location;
    // setPosition([latitude, longitude]);
    // console.log(record)
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
        <NewIncident 
        setIncidents={setIncidents}
        setAddVisible={setAddVisible}
        incidents={incidents}
        handleOk={handleOk}/>
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
        <Table 
          dataSource={filteredData}
          columns={columns}
          onRow={(record) => ({ onClick: ({target}) => {
            if (target.tagName !== 'A') { // check if the clicked element is not an anchor tag
              handleRowClick(record);
            }
          }
          })} />
          <MapComponent position={position} />
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