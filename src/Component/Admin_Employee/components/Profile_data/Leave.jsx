import React from 'react';

const leaveRequests = [
  {
    employeeName: 'Lokendra Pandey',
    employeeId: 'RWI123',
    department: 'Design',
    leaveDetail: 'Link/doc.pdf',
    appliedDate: 'July 14, 2023',
    status: 'Approved',
  },
  {
    employeeName: 'Lokendra Pandey',
    employeeId: 'RWI123',
    department: 'Design',
    leaveDetail: 'Link/doc.pdf',
    appliedDate: 'July 14, 2023',
    status: 'Approved',
  },
  {
    employeeName: 'Lokendra Pandey',
    employeeId: 'RWI123',
    department: 'Design',
    leaveDetail: 'Link/doc.pdf',
    appliedDate: 'July 14, 2023',
    status: 'Approved',
  },
  {
    employeeName: 'Lokendra Pandey',
    employeeId: 'RWI123',
    department: 'Design',
    leaveDetail: 'Link/doc.pdf',
    appliedDate: 'July 14, 2023',
    status: 'Pending',
  },
  {
    employeeName: 'Lokendra Pandey',
    employeeId: 'RWI123',
    department: 'Design',
    leaveDetail: 'Link/doc.pdf',
    appliedDate: 'July 14, 2023',
    status: 'Pending',
  },
];

const Leave = () => {
  return (
    <>
    <div className="container p-4  relative absolute left-80" style={{ fontSize: '18px', width: '80%', margin:'180px 0 0px 0px'   }}>
      {/* <h1 className="text-2xl font-bold ml-[10px]" >Recent Leave Requests</h1> */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100 text-center">
            <tr>
              <th className="py-2 px-4">Employee Name</th>
              <th className="py-2 px-4">Employee ID</th>
              <th className="py-2 px-4">Department</th>
              <th className="py-2 px-4">Leave Detail</th>
              <th className="py-2 px-4">Applied Date</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((request, index) => (
              <tr key={index} className="text-center border-b">
                <td className="py-2 px-4 flex items-center justify-center">
                  <img
                    src="https://media.licdn.com/dms/image/D4D03AQGW5q-ed5fuKw/profile-displayphoto-shrink_200_200/0/1715247234088?e=2147483647&v=beta&t=g__xbk7kXoiStGnzMmIw_PpAHbZiRDuM5AJ5CMoAIuc"
                    className="rounded-full mr-2 w-10 h-10"
                    alt="Employee Avatar"
                  />
                  {request.employeeName}
                </td>
                <td className="py-2 px-4">{request.employeeId}</td>
                <td className="py-2 px-4">{request.department}</td>
                <td className="py-2 px-4">
                  <a href={request.leaveDetail} className="text-blue-500 hover:underline">
                    {request.leaveDetail}
                  </a>
                </td>
                <td className="py-2 px-4">{request.appliedDate}</td>
                <td className="py-2 px-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      request.status === 'Approved' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                    }`}
                  >
                    {request.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Leave;






// import React from 'react';

// const leaveRequests = [
//   {
// employeeName: 'Lokendra Pandey',
//     employeeId: 'RWI123',
//     department: 'Design',
//     leaveDetail: 'Link/doc.pdf',
//     appliedDate: 'July 14, 2023',
//     status: 'Approved',
//   },
//   {
// employeeName: 'Lokendra Pandey',
//     employeeId: 'RWI123',
//     department: 'Design',
//     leaveDetail: 'Link/doc.pdf',
//     appliedDate: 'July 14, 2023',
//     status: 'Approved',
//   },
//   {
// employeeName: 'Lokendra Pandey',
//     employeeId: 'RWI123',
//     department: 'Design',
//     leaveDetail: 'Link/doc.pdf',
//     appliedDate: 'July 14, 2023',
//     status: 'Approved',
//   },
//   {
// employeeName: 'Lokendra Pandey',
//     employeeId: 'RWI123',
//     department: 'Design',
//     leaveDetail: 'Link/doc.pdf',
//     appliedDate: 'July 14, 2023',
//     status: 'Pending',
//   },
//   {
// employeeName: 'Lokendra Pandey',
//     employeeId: 'RWI123',
//     department: 'Design',
//     leaveDetail: 'Link/doc.pdf',
//     appliedDate: 'July 14, 2023',
//     status: 'Pending',
//   },
// ];

// const Leave = () => {
//   return (
//     <div className="container">
//       <h1>Recent Leave Request</h1>
// <table className="table table-bordered border-primary">
// <thead className="thead-light text-center text-nowrap">

//         {/* <thead> */}
//           <tr>
//             <th>Employee Name</th>
//             <th>Employee ID</th>
//             <th>Department</th>
//             <th>Leave Detail</th>
//             <th>Applied Date</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leaveRequests.map((request, index) => (
//             <tr key={index}>
// <td  className="thead-light text-center text-nowrap">
//                 <img
//                 //   src={`https://avatars.dicebear.com/api/male/akash${index + 1}.svg`}
// src="https://media.licdn.com/dms/image/D4D03AQGW5q-ed5fuKw/profile-displayphoto-shrink_200_200/0/1715247234088?e=2147483647&v=beta&t=g__xbk7kXoiStGnzMmIw_PpAHbZiRDuM5AJ5CMoAIuc"  className="rounded-circle mr-2  w-5"
//                   alt="Employee Avatar"

//                 />
//                 {request.employeeName}
//               </td>
//               <td>{request.employeeId}</td>
//               <td>{request.department}</td>
//               <td><a href={request.leaveDetail}>{request.leaveDetail}</a></td>
//               <td>{request.appliedDate}</td>
//               <td>
//                 <span
//                   className={`status ${request.status.toLowerCase()}`}
//                 >
//                   {request.status}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Leave;