import React, { useEffect, useState } from "react";
import Clocked from "./Clocked";
import Calendar from "./Calendra";
import { MdOutlineDateRange } from "react-icons/md";

function TimeTracker() {
  const [clockin, setClockin] = useState(new Date());
  const [clockout, setClockout] = useState(new Date());

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setClockout(new Date());
  //   }, 1000);
  // }, [setClockout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setClockout(new Date());
    }, 1000);
  }, [setClockout]);

  const count = clockin + setClockout;

  return (
    <>
      <div className=" w-full bg-[#d2d9df]">
        <div className=" w-full bg-[#d2d9df] p-8 flex gap-10">
          <div className="bg-[#f0f4f5] flex justify-center items-center rounded-md h-96 w-1/2 ">
            <div className="bg-[#ffffff]  rounded-md h-80 w-4/5">
              <div className="flex justify-around mt-2">
                <h6 className=" text-[rgb(162,164,170)] font-medium">
                  started at {clockin.getHours()}:{clockin.getMinutes()}{" "}
                </h6>
                <h6 className="text-[rgb(162,164,170)] font-medium">
                  {clockin.toDateString()}
                </h6>
              </div>
              <div className="mt-4">
                <h1 className="text-center  font-bold text-3xl">
                  {clockout.toLocaleTimeString()} h
                </h1>
                <div className="flex justify-around items-center mt-3">
                  <button className="bg-[#ffa455] rounded-md w-24 h-12">
                    clock-out
                  </button>
                  <button className=" border border-solid border-[#60689f] text-[#586cee] rounded-md w-32 h-12">
                    Take a break
                  </button>
                </div>

                <h1 className="flex  w-auto mt-4 font-medium text-[rgb(162,164,170)] ">
                  yesterday
                </h1>
                <div className=" h-12 bg-slate-300 rounded-md bg-[#e7ecef]">
                  <div className="flex justify-around  h-6">
                    <div>
                      <p className=" text-[rgb(162,164,170)] font-medium h-5  ">
                        clock-in{" "}
                      </p>
                      <p className=" font-extrabold text-sm  rounded-md w-16    ">
                        {clockin.getHours()}:{clockin.getMinutes()}
                      </p>
                    </div>
                    <div>
                      <p className="text-[rgb(162,164,170)] font-medium  h-5 ">
                        {" "}
                        clock-out
                      </p>
                      <p className=" font-extrabold text-sm  rounded-md w-16    ">
                        {clockout.getHours()}:{clockout.getMinutes()}
                      </p>
                    </div>
                    <p className=" font-extrabold h-5  text-xl text-[rgb(162,164,170)] mt-3">
                      08:15 h
                    </p>
                  </div>
                </div>

                <h1 className="flex  w-auto  font-medium text-[rgb(162,164,170)]">
                  May ,04,2024
                </h1>
                <div className=" h-12 bg-slate-300 rounded-md bg-[#e7ecef]">
                  <div className="flex justify-around  h-6">
                    <div>
                      <p className=" text-[rgb(162,164,170)] font-medium h-5  ">
                        clock-in{" "}
                      </p>
                      <p className=" font-extrabold text-sm  rounded-md w-16    ">
                        {clockin.getHours()}:{clockin.getMinutes()}
                      </p>
                    </div>
                    <div>
                      <p className="text-[rgb(162,164,170)] font-medium  h-5 ">
                        {" "}
                        clock-out
                      </p>
                      <p className=" font-extrabold  text-sm rounded-md w-16    ">
                        {clockout.getHours()}:{clockout.getMinutes()}
                      </p>
                    </div>
                    <p className=" font-extrabold h-5  text-xl text-[rgb(162,164,170)] mt-3">
                      08:15 h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f0f4f5] w-1/2 h-96">
            <img
              className=" h-96"
              src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png"
              alt=""
            />
          </div>
        </div>

        <div className="bg-[#f6f7f9] w-full h-96 ml-7  ">
          <div className="h-80 w-96 bg-[#ffff] ml-8 rounded-md">
            <div className="flex justify-around ">
              <h1 className=" mt-3">My Schedule</h1>
              <MdOutlineDateRange className="h-6 w-8 mt-3 rounded-md bg-[#e7ecef]" />
            </div>

            <div>
              <span>
                <Calendar />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeTracker;
