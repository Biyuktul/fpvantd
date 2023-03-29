import React from "react";
import '../styles/EmployeeTable.css'

const Button = ({ onClick, children }) => {
  return <button className="add-button" onClick={onClick}>{children}</button>;
};

export default Button;