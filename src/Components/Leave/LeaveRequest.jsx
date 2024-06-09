import React, { useState } from 'react';
import './LeaveRequest.css';

const LeaveRequest = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);

    const handleStatusClick = (request) => {
        setSelectedRequest(request);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const leaveRequests = [
        {
            img: "https://i.pinimg.com/564x/05/5a/91/055a91979264664a1ee12b9453610d82.jpg",
            employeeName: 'Akash Pathak',
            employeeId: 'RWI123',
            branch: 'Raipur',
            designation: 'HR Head',
            appliedDate: 'July 14, 2023',
            attachment: 'Link/doc.pdf',
            leaveFrom: 'July 05',
            leaveTill: 'July 08',
            status: 'Pending',
            reason: 'Lorem ipsum napptemrometer reskade när dekakåling kötosm. Zombiebrand võnera juledes, titode. Plaryr fyren. Antebuck adt innan biocism i meganomi. Valabur egosusk skytigt. Mikrodant red även om',
            leaveType: 'Casual Leave',
            leavePeriod: '1 September 2023 - 2 September 2023',
            department: 'Design',
            jobCover: {
                name: 'Steven Parkson',
                email: 'stevenparkson@gmail.com',
                phone: 'phone_icon_url',
                message: 'message_icon_url'
            }
        },
        {
            img: "https://i.pinimg.com/564x/05/5a/91/055a91979264664a1ee12b9453610d82.jpg",
            employeeName: 'Floyd Miles',
            employeeId: 'RWI123',
            branch: 'Indore',
            designation: 'HR',
            appliedDate: 'July 14, 2023',
            attachment: 'Link/doc.pdf',
            leaveFrom: 'Apr 06',
            leaveTill: 'Apr 10',
            status: 'Approved',
            reason: 'Lorem ipsum napptemrometer reskade när dekakåling kötosm. Zombiebrand võnera juledes, titode. Plaryr fyren. Antebuck adt innan biocism i meganomi. Valabur egosusk skytigt. Mikrodant red även om',
            leaveType: 'Casual Leave',
            leavePeriod: '1 September 2023 - 2 September 2023',
            department: 'Design',
            jobCover: {
                name: 'Steven Parkson',
                email: 'stevenparkson@gmail.com',
                phone: 'phone_icon_url',
                message: 'message_icon_url'
            }
        },
        {
            img: "https://i.pinimg.com/564x/05/5a/91/055a91979264664a1ee12b9453610d82.jpg",
            employeeName: 'Cody Fisher',
            employeeId: 'RWI123',
            branch: 'Pune',
            designation: 'HR',
            appliedDate: 'July 14, 2023',
            attachment: 'Link/doc.pdf',
            leaveFrom: 'Mar 14',
            leaveTill: 'Mar 16',
            status: 'Approved',
            reason: 'Lorem ipsum napptemrometer reskade när dekakåling kötosm. Zombiebrand võnera juledes, titode. Plaryr fyren. Antebuck adt innan biocism i meganomi. Valabur egosusk skytigt. Mikrodant red även om',
            leaveType: 'Casual Leave',
            leavePeriod: '1 September 2023 - 2 September 2023',
            department: 'Design',
            jobCover: {
                name: 'Steven Parkson',
                email: 'stevenparkson@gmail.com',
                phone: 'phone_icon_url',
                message: 'message_icon_url'
            }
        },
        {
            img: "https://i.pinimg.com/564x/05/5a/91/055a91979264664a1ee12b9453610d82.jpg",
            employeeName: 'Dianne Russell',
            employeeId: 'RWI123',
            branch: 'Raipur',
            designation: 'HR',
            appliedDate: 'July 14, 2023',
            attachment: 'Link/doc.pdf',
            leaveFrom: 'Feb 02',
            leaveTill: 'Feb 10',
            status: 'Approved',
            reason: 'Lorem ipsum napptemrometer reskade när dekakåling kötosm. Zombiebrand võnera juledes, titode. Plaryr fyren. Antebuck adt innan biocism i meganomi. Valabur egosusk skytigt. Mikrodant red även om',
            leaveType: 'Casual Leave',
            leavePeriod: '1 September 2023 - 2 September 2023',
            department: 'Design',
            jobCover: {
                name: 'Steven Parkson',
                email: 'stevenparkson@gmail.com',
                phone: 'phone_icon_url',
                message: 'message_icon_url'
            }
        },
        {
            img: "https://i.pinimg.com/564x/05/5a/91/055a91979264664a1ee12b9453610d82.jpg",
            employeeName: 'Savannah Nguyen',
            employeeId: 'RWI123',
            branch: 'Gurgaon',
            designation: 'HR',
            appliedDate: 'July 14, 2023',
            attachment: 'Link/doc.pdf',
            leaveFrom: 'Jan 16',
            leaveTill: 'Jan 19',
            status: 'Reject',
            reason: 'Lorem ipsum napptemrometer reskade när dekakåling kötosm. Zombiebrand võnera juledes, titode. Plaryr fyren. Antebuck adt innan biocism i meganomi. Valabur egosusk skytigt. Mikrodant red även om',
            leaveType: 'Casual Leave',
            leavePeriod: '1 September 2023 - 2 September 2023',
            department: 'Design',
            jobCover: {
                name: 'Steven Parkson',
                email: 'stevenparkson@gmail.com',
                phone: 'phone_icon_url',
                message: 'message_icon_url'
            }
        },
    ];

    return (
        <div className="request-container">
            <h1 className='request-head'>Recent Leave Request</h1>
            <table>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Employee ID</th>
                        <th>Branch</th>
                        <th>Designation</th>
                        <th>Applied Date</th>
                        <th>Attachment</th>
                        <th>Leave From</th>
                        <th>Leave Till</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {leaveRequests.map((request, index) => (
                        <tr key={index}>
                            <td className="employee-info">
                                <img src={request.img} alt="img" className="employee-img" />
                                {request.employeeName}
                            </td>
                            <td>{request.employeeId}</td>
                            <td>{request.branch}</td>
                            <td>{request.designation}</td>
                            <td>{request.appliedDate}</td>
                            <td><a href={request.attachment} target="_blank" rel="noopener noreferrer">View</a></td>
                            <td>{request.leaveFrom}</td>
                            <td>{request.leaveTill}</td>
                            <td>
                                <span
                                    className={`status ${request.status.toLowerCase()}`}
                                    onClick={() => handleStatusClick(request)}
                                >
                                    {request.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && selectedRequest && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>
                            &times;
                        </span>
                        <h2 className='modal-Heading'>Employee Name</h2>
                        <div className={`modal-header ${selectedRequest.status.toLowerCase()}`}>
                            <h2>{selectedRequest.status}</h2>
                        </div>
                        <div className="modal-body">
                            <p><strong>Leave Type:</strong> {selectedRequest.leaveType}</p>
                            <p><strong>Leave Period:</strong> {selectedRequest.leavePeriod}</p>
                            <p><strong>Employee Name:</strong> {selectedRequest.employeeName}</p>
                            <p><strong>Emp ID:</strong> {selectedRequest.employeeId}</p>
                            <p><strong>Department:</strong> {selectedRequest.department}</p>
                            <p><strong>Reason:</strong> {selectedRequest.reason}</p>
                            <p><strong>Attached File:</strong> <a href={selectedRequest.attachment} target="_blank" rel="noopener noreferrer">View</a></p>
                            <p><strong>Job Will Be Covered By:</strong></p>
                            <div className="job-cover">
                                <p>{selectedRequest.jobCover.name}</p>
                                <a href="#"><img src='/call.png' alt="phone" /></a>
                                <a href="#"><img src='/message.png' alt="message" /></a>
                            </div>
                            <button className="download-btn">Download as PDF</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LeaveRequest;
