import React from 'react';
import ReportForm from './ReportForm';
import "../report.css"

const ReportList = () => {
    const employeeData = [
        {
            img: "https://i.pinimg.com/564x/05/5a/91/055a91979264664a1ee12b9453610d82.jpg",
            name: 'Akash pathak',
            employeeId: 'RWI123',
            department: 'Design',
            designation: 'Sr.developer',
            reportDate: 'July 14, 2023',
            reportLink: 'Link/doc.pdf'
        },
        {
            img: "https://i.pinimg.com/564x/05/5a/91/055a91979264664a1ee12b9453610d82.jpg",
            name: 'Akash pathak',
            employeeId: 'RWI123',
            department: 'Design',
            designation: 'Sr.developer',
            reportDate: 'July 14, 2023',
            reportLink: 'Link/doc.pdf'
        },
        {
            img: "https://i.pinimg.com/564x/05/5a/91/055a91979264664a1ee12b9453610d82.jpg",
            name: 'Akash pathak',
            employeeId: 'RWI123',
            department: 'Design',
            designation: 'Employee',
            reportDate: 'July 14, 2023',
            reportLink: 'Link/doc.pdf'
        },
        {
            img: "https://i.pinimg.com/564x/05/5a/91/055a91979264664a1ee12b9453610d82.jpg",
            name: 'Akash pathak',
            employeeId: 'RWI123',
            department: 'Design',
            designation: 'Employee',
            reportDate: 'July 14, 2023',
            reportLink: 'Link/doc.pdf'
        },
        {
            img: "https://i.pinimg.com/564x/05/5a/91/055a91979264664a1ee12b9453610d82.jpg",
            name: 'Akash pathak',
            employeeId: 'RWI123',
            department: 'Design',
            designation: 'Sr.developer',
            reportDate: 'July 14, 2023',
            reportLink: 'Link/doc.pdf'
        },
    ];

    return (
        <div className="container">
            <div className="sidebar">
                <ReportForm employee={employeeData} />
            </div>

            <div className="main">
                <h1>Recent Senior Employee Report</h1>
                <table className="employee-table">
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th>Employee ID</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Detail</th>
                            <th>Applied Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeData.map((employee, index) => (
                            <tr key={index}>
                                <td className="employee-name">
                                    <img src={employee.img} alt="img" height={40} width={40} />
                                    {employee.name}
                                </td>
                                <td>{employee.employeeId}</td>
                                <td>{employee.department}</td>
                                <td>{employee.designation}</td>
                                <td><a href={employee.reportLink} target="_blank" rel="noreferrer">{employee.reportLink}</a></td>
                                <td>{employee.reportDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportList;