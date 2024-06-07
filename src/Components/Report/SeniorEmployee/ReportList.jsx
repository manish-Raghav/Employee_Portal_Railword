import { useState } from 'react';
import ReportForm from './ReportForm';
import "../report.css"

const ReportList = () => {
    const [reportData, setReportData] = useState([]);
    const employeeData = [
        {
            img: "https://i.pinimg.com/564x/05/5a/91/055a91979264664a1ee12b9453610d82.jpg",
            name: 'Manish pathak',
            employeeId: 'RWI123',
            department: 'Design',
            designation: 'Sr.developer',
            reportDate: 'July 14, 2023',
            reportLink: 'Link/doc.pdf'
        },
        {
            img: "https://i.pinimg.com/564x/05/5a/91/055a91979264664a1ee12b9453610d82.jpg",
            name: 'Shubham Agnihotri',
            employeeId: 'RWI13',
            department: 'Design',
            designation: 'Sr.developer',
            reportDate: 'July 14, 2023',
            reportLink: 'Link/doc.pdf'
        },
        {
            img: "https://i.pinimg.com/564x/05/5a/91/055a91979264664a1ee12b9453610d82.jpg",
            name: 'Mphit Ror',
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


    const fetchReport = () => {
        // Replace with your actual API call or data fetching logic
        const mockData = [
            { task: 'Figma Design', detail: 'Link/doc.pdf', date: 'July 14, 2023' },
            // Add more mock data entries
        ];
        setReportData(mockData);
    };

    console.log(reportData);

    return (
        <div className="main-container">
            <div className="container">
                <div className="sidebar">
                    <ReportForm employee={employeeData} fetchReport={fetchReport} />
                </div>

                <div className="main">
                    <h1>Recent Senior Employee Report</h1>
                    <table className="employee-table table">
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

                    <div className="my-report">
                        <h1>My Report</h1>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Task Assigned</th>
                                    <th>Detail</th>
                                    <th>Report Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reportData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.task}</td>
                                        <td><a href="#">{item.detail}</a></td>
                                        <td>{item.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ReportList;