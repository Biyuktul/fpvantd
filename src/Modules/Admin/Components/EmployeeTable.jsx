import '../styles/EmployeeTable.css';
import React, { useState } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import PopupFormButton from './FormPopup';
import ConfirmPopup from './ConfirmPopup';
import OfficerDetail from './OfficerDetailPopup';

function EmployeeTable({ employees }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null)

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  
  const rowsPerPage = 7;
  const totalRows = employees.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  function goToNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function goToPreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }


  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const visibleEmployees = employees.slice(startIndex, endIndex);
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  ).slice(startIndex, endIndex);

  let myarray = search.trim().length !== 0 ? filteredEmployees : visibleEmployees;

  return (
    <div className="employee-table-wrapper">
    <input
        type="text"
        placeholder="Search Employees..."
        value={search}
        onChange={handleSearch}
        className="search-input"
      />

      <table className="employee-table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th className='salary'>Salary</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {myarray.map((employee) => (
            <tr key={employee.id}>
              <td>
                <img
                  src={employee.photoUrl}
                  alt={employee.name}
                  className="employee-photo"
                />
              </td>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>
              <td>
                <button onClick={() => setSelectedEmployee(employee)}>
                <PopupFormButton
                    text={"Edit"}
                    formTitle={"Edit Officer Form"} 
                    selectedEmployee={employee}
                />
                </button>
              </td>
              
              <td>
                <button onClick={() => setSelectedEmployee(employee)}>
                      <ConfirmPopup selectedEmployee={employee} />
                </button>
              </td>
              <td>
                <button onClick={() => setSelectedEmployee(employee)}>
                    <OfficerDetail selectedEmployee={employee} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>


      </table>
      <div className="pagination">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="previous-button"
        >
          Previous
        </button>
        <div className="page-numbers">
          Page {currentPage} of {totalPages}
        </div>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="next-button"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default EmployeeTable;