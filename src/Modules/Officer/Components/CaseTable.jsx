import { Table } from 'antd';
import { useState } from 'react';
import CaseDetailModal from './CasePopup';

const offense = [
  {
      id: '23232',
      type: 'theft',
      date: '12/12/22',
      location: 'goro',
      description: 'some description'

  },
]

const defendant = [
  {
      name: "",
      age: 25,
      gender: 'M',
      address: 'goro street',
      phone: '+2519223344',
      criminal_history: '2',
      court_date: '12/12/12',
      verdict: 'free',
  },
]



const officer = [
  {
    team_id: '2211',
    team_leader: 'yona',
    technical_inspector: 'yona',
    body_related_inspector: 'yona',
    property_related_inspector: 'yona',
    number_of_patrols: 4
  }
]

const case_info = [
  {
    type: 'children',
    date: '12/12/12',
    location: 'Addis Ababa',
    descritpion: 'some description',
    complainant_name: 'biyuktul ble',
    complainant_phone: '099922112',
    complainant_address: 'addis ababa',
    complainant_statment: 'some wittnes word',
    suspect_name: 'biyuktul ble',
    suspect_address: 'addis ababa',
    suspect_description: 'some description',
    witness_name: 'biyuktul ble',
    wittness_address: 'addis ababa',
    witness_statment: 'some wittnes word',
    status: 'open',
  }
]

const CaseTable = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const handleClick = (record) => {
    setVisible(true);
    console.log(record);
    setSelectedRowData(record);
  };

  const handleCancel = () => {
    setVisible(false);
    setSelectedRowData(null);
  };

  const columns = [
    { title: 'Case ID', dataIndex: 'id' },
    { title: 'Case Type', dataIndex: 'type' },
    { title: 'Case Date', dataIndex: 'date' },
    { title: 'Case Priority', dataIndex: 'priority' },
    { title: 'Case Status', dataIndex: 'status' },
    { title: 'Assigned Team ID', dataIndex: 'team' },
    { title: 'Case Description', dataIndex: 'description' },
  ];

  return (
    <>
      <Table
        dataSource={data}
        columns={columns}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              handleClick(record);
            },
          };
        }}
        className='w-2/3'
      />

    <CaseDetailModal
            title="Case Detail"
            visible={visible}
            handleCancel={handleCancel}
            selectedRowData={selectedRowData}
            offense={offense}
            defendant={defendant}
            officer={officer}
            case_info={case_info}
    />
    </>
  );
};


export default CaseTable;