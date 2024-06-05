import React from "react"
import {IoMdCall} from "react-icons/io"
import {IoChatbubbleEllipsesOutline} from "react-icons/io5"
const PandingStatus = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
      <div className="flex items-center justify-center text-xl m-4 ">
        <h1 className=" font-bold text-3xl ">Leave Status</h1>
      </div>
      <div className="bg-orange-500 text-white text-center rounded-xl py-4">
        <span className="text-2xl font-semibold">PENDING</span>
      </div>
      <div className="px-6 py-4 ">
        <div className="mb-4 rounded-lg shadow-lg bg-gray-200 grid grid-cols-2 p-2 justify-items-center ">
          <span className=" text-gray-500 text-xl font-semibold self-center ">
            Leave's
          </span>
          <div className="flex items-start flex-col space-x-4">
            <div className="flex justify-start items-center space-x-2">
              <span className="block w-4 h-4 bg-gray-400 rounded-full"></span>
              <span className="text-gray-500">Remaining - 3</span>
            </div>
            <div className="flex justify-start items-center space-x-2">
              <span className="block w-4 h-4 bg-blue-500 rounded-full"></span>
              <span className="text-blue-500">Used - 4</span>
            </div>
            <div className="flex justify-start items-center space-x-2">
              <span className="block w-4 h-4 bg-black rounded-full"></span>
              <span className="text-black">Total - 7</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <span className="block text-gray-700 font-semibold">Leave Type:</span>
          <span className="block text-2xl font-bold text-black">
            Casual Leave
          </span>
          <span className="block text-gray-700">
            1 September 2023 - 2 September 2023
          </span>
          <span className="block text-gray-700">
            <span className="font-bold">Leave Period</span>: Full Day
          </span>
        </div>
        <hr />
        <div className="mt-3 mb-4">
          <span className="block text-gray-700 font-semibold">Reason:</span>
          <p className="text-gray-600">
            Lörem ipsum nappterometer reskade när dekakäling kötosm. Zombiebrand
            võnera juledes, titode. Plaryr fyren. Antebuck adat innan biocism i
            meganomi.
          </p>

          <div className="mb-4 flex items-center justify-between">
            <span className=" text-gray-700 font-semibold">Attached File:</span>

            <span className="text-blue-500">Filename.jpg</span>
            <button className="bg-blue-500 text-white px-3 py-1 rounded-xl">
              View
            </button>
          </div>
        </div>
        <hr />
        <div className="mt-3 mb-4">
          <span className="block text-gray-700 font-semibold">
            Job Will Be Covered By:
          </span>
          <div className="flex items-center space-x-2 justify-between bg-blue-100 p-3 rounded-xl">
            <div>
              <span className="block text-black">Steven Parkson</span>
              <span className="block text-gray-600">
                stevenparkson@gmail.com
              </span>
            </div>
            <div className="flex space-x-2 text-xl">
              <button className=" p-2 rounded-full">
                <IoMdCall />
              </button>
              <button className=" p-2 rounded-full">
                <IoChatbubbleEllipsesOutline />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PandingStatus
