import React from "react"

const RecentLeaveRequests = () => {
  const leaveRequests = [
    {
      Employee_Name: "Akash pathak",
      Employee_ID: "RWI123",
      Department: "Design",
      Leave_Detail: "Link/doc.pdf",
      Applied_Date: "July 14, 2023",
      Status: "Pending",
    },
    {
      Employee_Name: "Akash pathak",
      Employee_ID: "RWI123",
      Department: "Design",
      Leave_Detail: "Link/doc.pdf",
      Applied_Date: "July 14, 2023",
      Status: "Pending",
    },

    {
      Employee_Name: "Akash pathak",
      Employee_ID: "RWI123",
      Department: "Design",
      Leave_Detail: "Link/doc.pdf",
      Applied_Date: "July 14, 2023",
      Status: "Approved",
    },

    {
      Employee_Name: "Akash pathak",
      Employee_ID: "RWI123",
      Department: "Design",
      Leave_Detail: "Link/doc.pdf",
      Applied_Date: "July 14, 2023",
      Status: "Pending",
    },

    {
      Employee_Name: "Akash pathak",
      Employee_ID: "RWI123",
      Department: "Design",
      Leave_Detail: "Link/doc.pdf",
      Applied_Date: "July 14, 2023",
      Status: "Approved",
    },

    {
      Employee_Name: "Akash pathak",
      Employee_ID: "RWI123",
      Department: "Design",
      Leave_Detail: "Link/doc.pdf",
      Applied_Date: "July 14, 2023",
      Status: "Pending",
    },
  ]

  const statusClasses = {
    Pending: "bg-yellow-200 text-yellow-800",
    Approved: "bg-green-200 text-green-800",
  }
  return (
    <div className="p-3 bg-white rounded-lg shadow-md w-[646px] overflow-hidden m-4 absolute bottom-0 right-0">
      <h2 className="text-xl font-semibold mb-4 ">Recent Leave request</h2>
      <table className=" w-full text-left  ">
        <thead>
          <tr className="text-xs font-medium text-gray-500 border-b border-gray-300">
            <th className=" py-2">Employee Name</th>
            <th className=" py-2">Employee ID</th>
            <th className=" py-2">Department</th>
            <th className=" py-2">Leave Detail</th>
            <th className=" py-2">Applied Date </th>
            <th className=" py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map((leave, index) => (
            <tr key={index} className="text-xs ">
              <td className="py-2 ">{leave.Employee_Name}</td>
              <td className="py-2">{leave.Employee_ID}</td>
              <td className="py-2">{leave.Department}</td>

              <td className="py-2 text-blue-500">
                <a href="#">{leave.Leave_Detail}</a>
              </td>
              <td className="py-2">{leave.Applied_Date}</td>
              <td className="py-2">
                <span
                  className={`px-4 py-1 rounded ${statusClasses[leave.Status]}`}
                >
                  {leave.Status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RecentLeaveRequests