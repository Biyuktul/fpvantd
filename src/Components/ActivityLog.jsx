import React from 'react';
import { Divider, Table } from 'antd';
const columns = [
  {
    title: 'Timestamp',
    dataIndex: 'time',
  },
  {
    title: 'User Id',
    dataIndex: 'id',
  },
  {
    title: 'Action Type',
    dataIndex: 'type',
  },
  {
    title: 'Result',
    dataIndex: 'result',
  },
];
const data = [
  {
    key: '1',
    time: '3:22:34',
    id: 123,
    type: 'Login Attempt',
    result: 'Success',
  },
  {
    key: '2',
    time: '4:10:03',
    id: 315,
    type: 'Login Attempt',
    result: 'Failed',
  },
  {
    key: '3',
    time: '4:42:12',
    id: 32,
    type: 'Edit Attempt',
    result: 'Success',
  },
];

const ActivityLog = () => (
  <>
    <Divider>Activity Logs</Divider>
    <Table
      columns={columns}
      dataSource={data}
      size="small" 
      />
  </>
);
export default ActivityLog;