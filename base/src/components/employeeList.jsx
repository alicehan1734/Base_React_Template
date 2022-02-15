import React, { useState, useEffect } from "react";
import EmployeeData from './EmployeeData';

function EmployeeList () {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {

    const employeeData = EmployeeData.getEmployee();

    setEmployees(employeeData);


}, []);

  return (
    <div>
    {employees.map(value =>
      <ol>
        <li>{value.empName} IS {value.constract ? "contracted" : "not contracted"}</li>
      </ol>
    )}

    </div>
  );
};

export default EmployeeList;