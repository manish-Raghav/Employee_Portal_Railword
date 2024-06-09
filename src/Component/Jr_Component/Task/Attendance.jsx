import React, { useState } from 'react';

const Attendance = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const attendanceData = [
        { date: '2024-05-01', checkin: '09:00', checkout: '17:00', break: '01:00', workingHours: '07:00' },
        { date: '2024-05-02', checkin: '09:15', checkout: '17:00', break: '01:00', workingHours: '06:45' },
        { date: '2024-05-03', checkin: '08:55', checkout: '17:00', break: '01:00', workingHours: '07:05' },
        { date: '2024-05-04', checkin: '09:05', checkout: '17:00', break: '01:00', workingHours: '06:55' },
        { date: '2024-05-05', checkin: '08:45', checkout: '17:00', break: '01:00', workingHours: '07:15' },
        { date: '2024-05-06', checkin: '09:10', checkout: '17:00', break: '01:00', workingHours: '06:50' },
        { date: '2024-05-07', checkin: '08:50', checkout: '17:00', break: '01:00', workingHours: '07:10' },
        { date: '2024-05-08', checkin: '09:00', checkout: '17:00', break: '01:00', workingHours: '07:00' },
        { date: '2024-05-09', checkin: '09:30', checkout: '17:00', break: '01:00', workingHours: '06:30' },
        { date: '2024-05-10', checkin: '08:40', checkout: '17:00', break: '01:00', workingHours: '07:20' },
    ];

    const filteredData = attendanceData.filter((data) => {
        const date = new Date(data.date);
        return (!startDate || date >= new Date(startDate)) && (!endDate || date <= new Date(endDate));
    });

    const getStatus = (checkin) => {
        const [hours, minutes] = checkin.split(':').map(Number);
        return hours > 9 || (hours === 9 && minutes > 0) ? 'Late' : 'On Time';
    };

    return (
        <div className="relative w-full h-[850px] mx-auto">
            <div className="w-full h-[64px] bg-gray-300 sticky top-0 z-50">
              
            </div>
            
            <div className="w-[320px] h-[680px] bg-gray-400 fixed top-[64px]"></div>
             
            <div className="absolute w-[calc(100%-352px)] h-[850px] bg-white rounded-lg top-[80px] left-[352px] p-4 shadow-lg">

                <h1 className="text-[23px] text-blue-950 font-medium mb-4">Attendance Overview</h1>
                <div className="flex mb-4">
                    <div className="mr-4 flex items-center gap-2">
                        <label className="block text-sm font-medium text-gray-700">From</label>
                        <input
                            type="date"
                            className="mt-1 block w-full bg-zinc-300 px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className="mr-4 flex items-center gap-2">
                        <label className="block text-sm font-medium text-gray-700">To</label>
                        <input
                            type="date"
                            className="mt-1 block w-full bg-zinc-300 px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="px-4 py-4 text-[17px] border-b-2 border-gray-300 font-normal text-left leading-4 text-zinc-400 tracking-wider whitespace-nowrap">Date</th>
                                <th className="px-4 py-4 text-[17px] border-b-2 border-gray-300 font-normal text-left leading-4 text-zinc-400 tracking-wider whitespace-nowrap">Check-in</th>
                                <th className="px-4 py-4 text-[17px] border-b-2 border-gray-300 font-normal text-left leading-4 text-zinc-400 tracking-wider whitespace-nowrap">Check-out</th>
                                <th className="px-4 py-4 text-[17px] border-b-2 border-gray-300 font-normal text-left leading-4 text-zinc-400 tracking-wider whitespace-nowrap">Break</th>
                                <th className="px-4 py-4 text-[17px] border-b-2 border-gray-300 font-normal text-left leading-4 text-zinc-400 tracking-wider whitespace-nowrap">Working Hours</th>
                                <th className="px-4 py-4 text-[17px] border-b-2 border-gray-300 font-normal text-left leading-4 text-zinc-400 tracking-wider whitespace-nowrap">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {filteredData.map((data, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2 text-[16px] whitespace-nowrap border-b font-normal border-gray-100">{data.date}</td>
                                    <td className="px-4 py-2 text-[16px] whitespace-nowrap border-b font-normal border-gray-100">{data.checkin}</td>
                                    <td className="px-4 py-2 text-[16px] whitespace-nowrap border-b font-normal border-gray-100">{data.checkout}</td>
                                    <td className="px-4 py-2 text-[16px] whitespace-nowrap border-b font-normal border-gray-100">{data.break}</td>
                                    <td className="px-4 py-2 text-[16px] whitespace-nowrap border-b font-normal border-gray-100">{data.workingHours}</td>
                                    <td className="px-4 py-2 text-[16px] whitespace-nowrap border-b font-normal border-gray-100">
                                        <span
                                            className={`inline-block py-1 px-3 rounded-md ${getStatus(data.checkin) === 'On Time' ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'}`}
                                        >
                                            {getStatus(data.checkin)}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Attendance;