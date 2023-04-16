import { Table, Tag } from 'antd';

const IncidentsTable = ({ incidents, handleRowClick }) => {

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

  return (
    <Table
      dataSource={incidents}
      columns={columns}
      rowKey="id"
      onRow={(record) => ({
        onClick: () => handleRowClick(record),
      })}
    />
  );
};

export default IncidentsTable;
