// LeaveTracker.js
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const LeaveTracker = ({ total, used }) => {
  const remaining = total - used;
  const percentage = (used / total) * 100;

  return (
    <div className="flex flex-row items-start justify-start flex-wrap">
      {/* Casual Leave */}
      <div className="flex items-center justify-start p-5 rounded-lg shadow-md bg-white w-94 font-sans m-2">
        <div className="w-32 h-32 mr-3">
          <CircularProgressbar
            value={percentage}
            text={`${used}/${total}`}
            styles={buildStyles({
              pathColor: "#3b82f6",
              textColor: "#3b82f6",
              trailColor: "#d1d5db",
            })}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="m-0 mb-2 text-lg text-gray-900">Casual leave</h3>
          <div className="ml-5 text-sm text-gray-600">
            <div className="flex items-center mb-1">
              <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
              <div>Remaining - {remaining}</div>
            </div>
            <div className="flex items-center mb-1">
              <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
              <div>Used - {used}</div>
            </div>
            <div className="flex items-center mb-1">
              <div className="w-3 h-3 rounded-full bg-blue-950 mr-2"></div>
              <div>Total - {total}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sick Leave */}
      <div className="flex items-center justify-start p-5 rounded-lg shadow-md bg-white w-94 font-sans m-2">
        <div className="w-32 h-32 mr-3">
          <CircularProgressbar
            value={percentage}
            text={`${used}/${total}`}
            styles={buildStyles({
              pathColor: "#3b82f6",
              textColor: "#3b82f6",
              trailColor: "#d1d5db",
            })}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="m-0 mb-2 text-lg text-gray-900">Sick leave</h3>
          <div className="ml-5 text-sm text-gray-600">
            <div className="flex items-center mb-1">
              <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
              <div>Remaining - {remaining}</div>
            </div>
            <div className="flex items-center mb-1">
              <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
              <div>Used - {used}</div>
            </div>
            <div className="flex items-center mb-1">
              <div className="w-3 h-3 rounded-full bg-blue-950 mr-2"></div>
              <div>Total - {total}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Annual Leave */}
      <div className="flex items-center justify-start p-5 rounded-lg shadow-md bg-white w-94 font-sans m-2">
        <div className="w-32 h-32 mr-3">
          <CircularProgressbar
            value={percentage}
            text={`${used}/${total}`}
            styles={buildStyles({
              pathColor: "#3b82f6",
              textColor: "#3b82f6",
              trailColor: "#d1d5db",
            })}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="m-0 mb-2 text-lg text-gray-900">Annual leave</h3>
          <div className="ml-5 text-sm text-gray-600">
            <div className="flex items-center mb-1">
              <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
              <div>Remaining - {remaining}</div>
            </div>
            <div className="flex items-center mb-1">
              <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
              <div>Used - {used}</div>
            </div>
            <div className="flex items-center mb-1">
              <div className="w-3 h-3 rounded-full bg-blue-950 mr-2"></div>
              <div>Total - {total}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Leave */}
      <div className="flex items-center justify-start p-5 rounded-lg shadow-md bg-white w-94 font-sans m-2">
        <div className="w-32 h-32 mr-3">
          <CircularProgressbar
            value={percentage}
            text={`${used}/${total}`}
            styles={buildStyles({
              pathColor: "#3b82f6",
              textColor: "#3b82f6",
              trailColor: "#d1d5db",
            })}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="m-0 mb-2 text-lg text-gray-900">Personal leave</h3>
          <div className="ml-5 text-sm text-gray-600">
            <div className="flex items-center mb-1">
              <div className="w-3 h-3 rounded-full  bg-gray-300 mr-2"></div>
              <div>Remaining - {remaining}</div>
            </div>
            <div className="flex items-center mb-1">
              <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
              <div>Used - {used}</div>
            </div>
            <div className="flex items-center mb-1">
              <div className="w-3 h-3 rounded-full bg-blue-950 mr-2"></div>
              <div>Total - {total}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveTracker;
