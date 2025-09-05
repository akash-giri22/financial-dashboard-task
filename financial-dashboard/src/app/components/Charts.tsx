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
import React from "react";
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

interface ChartsProps {
  sipBusinessData: { labels: string[]; barData: number[]; lineData: number[] };
  monthlyMisData: any;
  loading: boolean;
}

export default function Charts({ sipBusinessData, monthlyMisData, loading }: ChartsProps) {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
  };

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
    labels: sipBusinessData.labels,
    datasets: [
      {
        type: "bar" as const,
        label: "SIP Business",
        data: sipBusinessData.barData,
        backgroundColor: "rgba(128, 0, 128, 0.5)",
      },
      {
        type: "line" as const,
        label: "Growth",
        data: sipBusinessData.lineData,
        borderColor: "rgba(54, 162, 235, 1)",
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
        <div className="h-80"> {/* Added a fixed height */}
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            </div>
          ) : (
            <Bubble data={bubbleData} options={chartOptions} />
          )}
        </div>
      </div>

      {/* SIP Business (Bar + Line) */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">SIP Business Chart</h2>
          <button className="text-red-600 text-sm font-semibold hover:underline">
            View Report
          </button>
        </div>
        <div className="h-80"> {/* Added a fixed height */}
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="w-12 h-12 border-4 border-purple-500 border-dashed rounded-full animate-spin"></div>
            </div>
          ) : (
            <Chart type="bar" data={barLineData} options={chartOptions} />
          )}
        </div>
      </div>

      {/* Monthly MIS Chart */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow md:col-span-2">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Monthly MIS</h2>
          <button className="text-red-600 text-sm font-semibold hover:underline">
            View Report
          </button>
        </div>
        <div className="h-80"> {/* Added a fixed height */}
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="w-12 h-12 border-4 border-green-500 border-dashed rounded-full animate-spin"></div>
            </div>
          ) : (
            <Line data={monthlyMisData} options={chartOptions} />
          )}
        </div>
      </div>
    </div>
  );
}
