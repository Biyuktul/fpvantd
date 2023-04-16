import { Table, Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;

const columns = [
  {
    title: 'Report ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Date Sent',
    dataIndex: 'dateSent',
    key: 'dateSent',
  },
  {
    title: 'Report',
    dataIndex: 'report',
    key: 'report',
  },
];

const data = [
 
  {
    key: '2',
    id: 'RPT002',
    dateSent: '2022-01-02',
    report: 'Jane Smith',
  },
  {
    key: '2',
    id: 'RPT002',
    dateSent: '2022-01-02',
    report: 'Jane Smith',
  },
  {
    key: '2',
    id: 'RPT002',
    dateSent: '2022-01-02',
    report: 'Jane Smith',
  },
  // Add more data here
];

const ReportTable = () => {
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    // do some thing here
  };

  const handleReset = (clearFilters) => {
    clearFilters();
  };

  const handleSort = (sorter) => {
    console.log(sorter);
  };

  return (
    <Table 
      columns={columns} 
      dataSource={data} 
      pagination={{
        pageSize: 5,
      }}
      title={() => (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Input 
              placeholder="Search" 
              prefix={<SearchOutlined />} 
              style={{ width: 200 }} 
              allowClear
              onSearch={(value) => console.log(value)}
            />
            
          </div>
          <div>
            <Select
              defaultValue="id"
              style={{ width: 120 }}
              onChange={handleSort}
            >
              <Option value="id">ID</Option>
              <Option value="dateSent">Date Sent</Option>
            </Select>
          </div>
        </div>
      )}
      onChange={handleSearch}
    />
  );
};

export default ReportTable;
