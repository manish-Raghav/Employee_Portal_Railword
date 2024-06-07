import React, { useState } from 'react';

const ReportForm = ({ employee }) => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleEmployeeChange = (event) => {
        setSelectedEmployee(event.target.value);
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Selected Employee:', selectedEmployee);
        console.log('Selected Date:', selectedDate);
    };

    return (
        <div className="report-form">
            <div className="report-container">
                <h2>Employee Report</h2>
                <small>Please provide information</small>
                <form onSubmit={handleSubmit}>
                    <div className="form">
                        <div>
                            <label htmlFor="employee">Select Employee : </label>
                            <select id="employee" onChange={handleEmployeeChange} style={{ border: "none", backgroundColor: "#e6e5e8" }}>
                                <option value="">Choose Employee...</option>
                                {employee.map((employee, i) => (
                                    <option key={i} value={employee.employeeId}>
                                        {employee.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='input-box'>
                            <label htmlFor="employeeId">Employee ID :</label>
                            <input type="text" />
                        </div>
                        <div className='input-box'>
                            <label htmlFor="date">Select Date : </label>
                            <input type="date" id="date" onChange={handleDateChange} />
                        </div>
                    </div>
                    <button type="submit">Fetch Report</button>
                </form>
            </div>
        </div>
    );
};

export default ReportForm;
