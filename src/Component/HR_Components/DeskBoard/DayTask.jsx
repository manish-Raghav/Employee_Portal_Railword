import React from "react";
function DayTask() {
  return (
    <>
      <div className="w-96">
        <h1 className=" font-bold text-lg ">Today Task</h1>
        <div className="m-10">
          <div className="flex justify-center items-center ">
            <h1 className=" border-r-2 border-[#9776e6] flex justify-between items-center font-bold w-16 h-10">
              09.30
            </h1>
            <p className="ml-10">UI/UX Designer</p>
          </div>
          <div className="flex mt-10 justify-center items-center ">
            <h1 className=" border-r-2 border-[#9776e6] flex items-center justify-center font-bold w-24 h-10 ">
              12.30
            </h1>
            <p className="ml-10">Magento Developer</p>
          </div>
          <div className="mt-10 justify-center items-center">
            <h6 className="">Thursday, 07june 2024</h6>
            <div className="mt-3 flex justify-center items-center ">
              <h1 className="border-r-2 border-[#9776e6] h-10 w-16  flex justify-center items-center font-bold ">
                09.30
              </h1>
              <p className="ml-10">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DayTask;
