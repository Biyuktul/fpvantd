import StaffTable from './StaffTable';
import PopupFormButton from './FormPopup';
import PermissionBox from './PermissionBox';

import '../styles/App.css';

const employees = [
        { id: 1, name: 'Alice', email: 'alice@example.com', department: 'Marketing', salary: 50000, photoUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 2, name: 'Bob', email: 'bob@example.com', department: 'Engineering', salary: 75000, photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', department: 'Sales', salary: 60000, photoUrl: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 4, name: 'Dave', email: 'dave@example.com', department: 'Marketing', salary: 55000, photoUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 5, name: 'Emma', email: 'emma@example.com', department: 'Engineering', salary: 80000, photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 6, name: 'Yonatan', email: 'alice@example.com', department: 'Marketing', salary: 50000, photoUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 7, name: 'Addis', email: 'bob@example.com', department: 'Engineering', salary: 75000, photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 8, name: 'Handino', email: 'charlie@example.com', department: 'Sales', salary: 60000, photoUrl: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 9, name: 'Anjejo', email: 'dave@example.com', department: 'Marketing', salary: 55000, photoUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 10, name: 'Gebru', email: 'emma@example.com', department: 'Engineering', salary: 80000, photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 11, name: 'Alice', email: 'alice@example.com', department: 'Marketing', salary: 50000, photoUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 12, name: 'Bob', email: 'bob@example.com', department: 'Engineering', salary: 75000, photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 13, name: 'Charlie', email: 'charlie@example.com', department: 'Sales', salary: 60000, photoUrl: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 14, name: 'Dave', email: 'dave@example.com', department: 'Marketing', salary: 55000, photoUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 15, name: 'Emma', email: 'emma@example.com', department: 'Engineering', salary: 80000, photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 16, name: 'Yonatan', email: 'alice@example.com', department: 'Marketing', salary: 50000, photoUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 17, name: 'Addis', email: 'bob@example.com', department: 'Engineering', salary: 75000, photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 18, name: 'Handino', email: 'charlie@example.com', department: 'Sales', salary: 60000, photoUrl: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 19, name: 'Anjejo', email: 'dave@example.com', department: 'Marketing', salary: 55000, photoUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 20, name: 'Gebru', email: 'emma@example.com', department: 'Engineering', salary: 80000, photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
      ];

function StaffsDashboard() {
    
    
    return (
      <div className=''>
            <div className=''>
            <StaffTable employees={employees} />
            </div>
      </div>
    );
  }
  export default StaffsDashboard;