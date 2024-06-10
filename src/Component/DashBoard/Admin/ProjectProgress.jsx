import React, {useState} from "react"
import {Bar} from "react-chartjs-2"
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker"
import moment from "moment"

// // Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const ProjectProgress = ({data}) => {
  const [startDate, setStartDate] = useState(new Date())
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Progress",
        data: data,
        backgroundColor: "#6A4FF0",
        borderColor: "#6A4FF0",
        borderWidth: 1,
        borderRadius: 10,
        barThickness: 15, // Adjust this for bar width
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [5],
        },
        ticks: {
          stepSize: 20,
        },
      },
    },
  }

  return (
    <div
      className="p-4 bg-white border rounded-lg"
      style={{width: "700px", height: "450px"}}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Project Progress Overview</h3>
        <div className="text-gray-500 cursor-pointer border-2 rounded-lg p-2">
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            customInput={<CustomInput />}
            dateFormat="MMMM d, yyyy"
          />
        </div>
      </div>

      <div style={{height: "90%"}}>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  )
}
const CustomInput = React.forwardRef(({value, onClick}, ref) => (
  <button className="text-gray-500 " onClick={onClick} ref={ref}>
    {moment(value).format("MMMM D, YYYY")}
  </button>
))
export default ProjectProgress
