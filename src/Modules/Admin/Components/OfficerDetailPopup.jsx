import { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';

const OfficerDetail = ({selectedEmployee}) => {
  const [open, setOpen] = useState(false);


  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Detail
      </Button>
      <Modal
        title={`${selectedEmployee.name} details`}
        centered
        open={open}
        onOk={() => setOpen(false)}
        okType='default'
        onCancel={() => setOpen(false)}
        width={500}
      >
        <p>Id: {selectedEmployee.id}</p>
        <p>Full Name: {selectedEmployee.name}</p>
        <p>Email: {selectedEmployee.email}</p>
        <p>Department: {selectedEmployee.department}</p>
        <p>Salary: {selectedEmployee.salary}</p>
        <p>Full Name: ...</p>
        <p>Email: ...</p>
        <p>Department: </p>
        <p>Id: ...</p>
        <p>Full Name: ...</p>
        <p>Email: ...</p>
        <p>Department: </p>
      </Modal>
    </>
  );
};

export default OfficerDetail;