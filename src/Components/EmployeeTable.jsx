import '../styles/EmployeeTable.css';
import React, { useState } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import Button from "./AddButton";

function EmployeeTable({ employees }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  
  const rowsPerPage = 7;
  const totalRows = employees.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  function handleRowClick(employee) {
    console.log(`Clicked on the eye for employee ${employee.name}`);
    // Add any other logic here to handle the row click
  }

  function goToPage(pageNumber) {
    setCurrentPage(pageNumber);
  }

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

  const handleEdit = (employee) => {
    console.log("Edit button clicked for employee with name", employee.name);
  };

  const handleDelete = (employee) => {
    console.log("Delete button clicked for employee with ID", employee.name);
  };


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
                <button
                    onClick={() => handleEdit(employee)}
                    className="edit-button">
                    <FaEdit className="edit-icon" />
                </button>
              </td>
              
              <td>
                <button
                    onClick={() => handleDelete(employee)}
                    className="delete-button">
                    <FaTrash className="delete-icon" />
                </button>
              </td>
              <td>
                <button
                    onClick={() => handleRowClick(employee)}
                    className="view-button">
                    <FaEye className="eye-icon" />
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