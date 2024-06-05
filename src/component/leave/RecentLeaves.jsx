import React from "react"

const recentLeaves = [
  {
    leaveFrom: "17/07/23",
    leaveEnd: "19/07/23",
    attachment: "Link/doc.pdf",
    appliedDate: "July 14, 2023",
    status: "Pending",
  },
  {
    leaveFrom: "17/07/23",
    leaveEnd: "19/07/23",
    attachment: "Link/doc.pdf",
    appliedDate: "July 14, 2023",
    status: "Approved",
  },
  {
    leaveFrom: "17/07/23",
    leaveEnd: "19/07/23",
    attachment: "Link/doc.pdf",
    appliedDate: "July 14, 2023",
    status: "Pending",
  },
]

const statusClasses = {
  Pending: "bg-yellow-200 text-yellow-800",
  Approved: "bg-green-200 text-green-800",
}

const RecentLeaves = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md  overflow-hidden m-4 ">
      <h2 className="text-xl font-semibold mb-4">My recent Leave's</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="text-xs font-medium text-gray-500  border-b border-gray-300">
            <th className="py-2">Leave From</th>
            <th className="py-2">Leave End</th>
            <th className="py-2">Attachment</th>
            <th className="py-2">Applied Date</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {recentLeaves.map((leave, index) => (
            <tr key={index} className="">
              <td className="py-2">{leave.leaveFrom}</td>
              <td className="py-2">{leave.leaveEnd}</td>
              <td className="py-2 text-blue-500">
                <a href="#">{leave.attachment}</a>
              </td>
              <td className="py-2">{leave.appliedDate}</td>
              <td className="py-2">
                <span
                  className={`px-2 py-1 rounded ${statusClasses[leave.status]}`}
                >
                  {leave.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RecentLeaves