import React from "react"
import {PiBuildingOfficeBold} from "react-icons/pi"
const BranchCard = ({branch}) => {
  return (
    <div className="p-9 bg-white shadow rounded-lg  ">
      <div className="text-gray-500 flex justify-center items-center m-2">
        <div className=" m-2 text-blue-500 text-2xl bg-gray-200 rounded-lg p-2">
          <PiBuildingOfficeBold />
        </div>
        <div className=" text-black text-lg"> {branch.name}</div>
      </div>

      <div className=" flex items-center">
        <div className="text-3xl font-bold m-2">{branch.employees}</div>
        <div className="text-green-500">Active Employee's</div>
      </div>

      <div className="text-gray-500">Managed By: {branch.manager}</div>
    </div>
  )
}

export default BranchCard
