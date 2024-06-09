import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import DayTask from "../../HR_Components/DeskBoard/DayTask";


class Calendar extends React.Component {
  state = {
    date: new Date(),
  };

  render() {
    const { date } = this.state;
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    // Create an array of day numbers for the current month
    const daysArray = [...Array(daysInMonth).keys()].map((day) => day + 1);

    // Create an array to represent the calendar grid
    const calendarGrid = [];
    let dayIndex = 0;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || dayIndex >= daysInMonth) {
          week.push(null);
        } else {
          week.push(daysArray[dayIndex]);
          dayIndex++;
        }
      }
      calendarGrid.push(week);
    }

    return (
      <>
        <div className="flex gap-24 ">
          <div className=" block ">
            <h2 className="bg-blue-500 w-96 rounded-md flex justify-around mt-3">
              <button>
                <FaArrowLeft className="bg-[#755af5] w-10 h-5 text-[#fff] " />
              </button>
              {date.toLocaleDateString("default", {
                month: "long",
                year: "numeric",
              })}
              <FaArrowRight className="bg-[#755af5] w-10 h-5 text-[#fff]" />
            </h2>

            <table className=" w-96 text-[#969799] font-medium mt-2 ">
              <thead className="">
                <tr>
                  <th>Sun</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
              </thead>
              <tbody className="   ">
                {calendarGrid.map((week, index) => (
                  <tr className=" ml-10" key={index}>
                    {week.map((day, index) => (
                      <td key={index}>
                        {" "}
                        <div className=" text-[#818382] w-6 flex justify-center m-1 ">
                          {day}
                        </div>{" "}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <DayTask />
          </div>
        </div>
      </>
    );
  }
}

export default Calendar;
