import React, {useState} from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import {
  FaAngleLeft,
  FaAngleRight,
  FaCalendarAlt,
  FaEllipsisV,
} from "react-icons/fa"
import moment from "moment"
import "./Schedule.css" // Assuming you have a Schedule.css file for custom styles

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const events = [
    {
      date: "2024-06-06",
      events: [
        {time: "09:30", role: "UI/UX Designer", task: "Practical Task Review"},
        {time: "12:00", role: "Magento Developer", task: "Resume Review"},
        {time: "13:30", role: "Sales Manager", task: "Final HR Round"},
      ],
    },
    {
      date: "2024-06-07",
      events: [
        {
          time: "09:30",
          role: "Front end Developer",
          task: "Practical Task Review",
        },
        {time: "11:00", role: "React JS", task: "TL Meeting"},
      ],
    },
  ]

  const renderEvents = () => {
    const selectedDateString = moment(selectedDate).format("YYYY-MM-DD")
    const dayEvents = events.find(event => event.date === selectedDateString)

    if (!dayEvents)
      return <p className="text-gray-500">No events for this date.</p>

    return dayEvents.events.map((event, index) => (
      <div
        key={index}
        className="event-item flex justify-between items-center my-4"
      >
        <div className="grid grid-cols-6 ">
          <div className="col-span-2 w-[20vh] grid content-center justify-items-center">
            <p className="font-bold text-sm text-gray-700">{event.time}</p>{" "}
          </div>
          <div className="col-span-4 border-blue-400 border-l-2 pl-4 ">
            <p className="text-sm text-gray-600">{event.role}</p>
            <p className="text-sm font-semibold text-gray-800">{event.task}</p>
          </div>
        </div>
        <div className="text-gray-400">
          <FaEllipsisV />
        </div>
      </div>
    ))
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-96">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">My Schedule</h3>
        <div className="text-gray-400">
          <FaCalendarAlt />
        </div>
      </div>
      <div className="mb-4 border rounded-lg shadow-sm">
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          inline
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="flex justify-between items-center px-2 py-1">
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
                className="focus:outline-none text-purple-500"
              >
                <FaAngleLeft />
              </button>
              <span className="text-gray-700 font-semibold">
                {moment(date).format("MMMM, yyyy")}
              </span>
              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
                className="focus:outline-none text-purple-500"
              >
                <FaAngleRight />
              </button>
            </div>
          )}
          calendarClassName="custom-calendar"
          dayClassName={date =>
            date.getDate() === selectedDate.getDate() &&
            date.getMonth() === selectedDate.getMonth() &&
            date.getFullYear() === selectedDate.getFullYear()
              ? "bg-purple-200 rounded-full"
              : undefined
          }
        />
      </div>
      <div className="border-b mb-4 pb-2">
        <p className="text-lg text-gray-700">
          {moment(selectedDate).format("dddd, D MMMM YYYY")}
        </p>
      </div>
      {renderEvents()}
    </div>
  )
}

export default Schedule
