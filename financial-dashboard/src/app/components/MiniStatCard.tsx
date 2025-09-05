"use client";

import React from "react";

interface MiniStatCardProps {
  title: string;
  value: string;
  icon: string;
}

const MiniStatCard: React.FC<MiniStatCardProps> = ({ title, value, icon }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-md transition-shadow flex items-center space-x-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">
          {title}
        </h3>
        <p className="text-xl font-bold mt-1">{value}</p>
      </div>
    </div>
  );
};

export default MiniStatCard;
