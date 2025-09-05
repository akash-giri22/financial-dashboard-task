import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, positive }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 w-full">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-gray-500 font-medium">{title}</h2>
        <button className="text-red-500 text-sm font-semibold hover:underline">
          View Report
        </button>
      </div>

      <div className="text-2xl font-bold">{value}</div>

      <div
        className={`text-sm mt-2 ${
          positive ? "text-green-600" : "text-red-600"
        }`}
      >
        {change} MoM
      </div>

      <div>
        <button className="text-blue-600 text-sm mt-2 hover:underline">
          View Trend
        </button>
      </div>
    </div>
  );
};

export default StatCard;
