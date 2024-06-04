import React, { useState } from 'react';
import "./report.css";

const Report = () => {
    const [employeeData, setEmployeeData] = useState([
        {
            name: 'Akasin pathak',
            employeeId: 'RWI123',
            department: 'HR',
            subject: 'Project report',
            branch: 'Raipur',
            reportDate: 'July 14, 2023',
        },
        {
            name: 'Akash pathak',
            employeeId: 'RWI123',
            department: 'HR',
            subject: 'employee report',
            branch: 'Pune',
            reportDate: 'July 14, 2023',
        },
        {
            name: 'Akash pathak',
            employeeId: 'RWI123',
            department: 'HR',
            subject: 'Project report',
            branch: 'Indore',
            reportDate: 'July 14, 2023',
        },
        {
            name: 'Akash pathak',
            employeeId: 'RWI123',
            department: 'HR',
            subject: 'employee report',
            branch: 'Gurgaon',
            reportDate: 'July 14, 2023',
        },
        {
            name: 'Akash pathak',
            employeeId: 'RWI123',
            department: 'HR',
            subject: 'employee report',
            branch: 'Raipur',
            reportDate: 'July 14, 2023',
        },
    ]);

    return (
        <div className="main">
            <h1>Recent Senior Employee Report</h1>
            <table className="employee-table">
                <thead>
                    <tr>
                        <th>HR Name</th>
                        <th>Employee ID</th>
                        <th>Department</th>
                        <th>Subject</th>
                        <th>Branch</th>
                        <th>Report Date</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeData.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{employee.employeeId}</td>
                            <td>{employee.department}</td>
                            <td>{employee.subject}</td>
                            <td>{employee.branch}</td>
                            <td>{employee.reportDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Report
