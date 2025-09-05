"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BubbleController,
} from "chart.js";
import { Line, Bubble, Chart } from "react-chartjs-2";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BubbleController
);

export default function Charts() {
  // Bubble chart data (Clients)
  const bubbleData = {
    datasets: [
      {
        label: "Clients",
        data: [
          { x: 10, y: 20, r: 15 },
          { x: 25, y: 15, r: 10 },
          { x: 40, y: 30, r: 20 },
        ],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  // SIP Business (Bar + Line combo)
  const barLineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        type: "bar" as const,
        label: "SIP Business",
        data: [120, 150, 180, 90, 200],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
      {
        type: "line" as const,
        label: "Growth",
        data: [100, 130, 160, 80, 190],
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
      },
    ],
  };

  // Monthly MIS (Multi-line chart)
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Revenue",
        data: [65, 59, 80, 81, 56],
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
      {
        label: "Expenses",
        data: [28, 48, 40, 19, 86],
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-10">
      {/* Clients Bubble Chart */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Clients</h2>
          <button className="text-red-600 text-sm font-semibold hover:underline">
            Download Report
          </button>
        </div>
        <Bubble data={bubbleData} />
      </div>

      {/* SIP Business (Bar + Line) */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">SIP Business Chart</h2>
          <button className="text-red-600 text-sm font-semibold hover:underline">
            View Report
          </button>
        </div>
        <Chart type="bar" data={barLineData} />
      </div>

      {/* Monthly MIS Chart */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow md:col-span-2">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Monthly MIS</h2>
          <button className="text-red-600 text-sm font-semibold hover:underline">
            View Report
          </button>
        </div>
        <Line data={lineData} />
      </div>
    </div>
  );
}