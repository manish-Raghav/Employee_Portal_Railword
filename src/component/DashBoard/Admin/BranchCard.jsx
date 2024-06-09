import React from "react";
import { PiBuildingOfficeBold } from "react-icons/pi";
const BranchCard = ({ branch }) => {
  return (
    <div className=" bg-white border rounded-lg">
      <div className="text-gray-500 flex  items-center m-2">
        <div className=" m-2 text-blue-500 text-2xl bg-gray-200 rounded-lg p-2">
          <PiBuildingOfficeBold />
        </div>
        <div className=" text-black text-lg"> {branch.name}</div>
      </div>
      <div className=" flex items-center mb-3 ml-2">
        <div className="text-4xl font-bold m-2">{branch.employees}</div>
        <div className="text-green-500">Active Employee's</div>
      </div>
      <hr />
      <div className=" px-4 py-3">
        <p className="text-gray-500 text-m">Managed By : {branch.manager}</p>
      </div>
    </div>
  );
};

export default BranchCard;
