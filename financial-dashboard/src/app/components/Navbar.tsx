"use client";

import React from "react";
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <>
      {/* Top Bar */}
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-2 flex items-center justify-between shadow-md border-b dark:border-gray-700">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">Wealth Elite</div>
          <div className="text-sm border border-gray-400 rounded-full px-2 py-1">
            My Live Portfolio
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 pl-8 rounded-md bg-gray-100 dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
          <div className="flex items-center space-x-4 text-xl">
            {/* Placeholder icons */}
            <span className="cursor-pointer">⟳</span>
            <span className="cursor-pointer">🔔</span>
            <span className="cursor-pointer">⚙️</span>
            <span className="cursor-pointer">👤</span>
            <button onClick={toggleDarkMode} className="text-xl cursor-pointer">
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>
          <button className="bg-red-600 text-white text-sm px-3 py-1 rounded-md font-semibold hover:bg-red-700 transition-colors">
            LOGOUT
          </button>
        </div>
      </div>

      {/* Bottom Menu Bar */}
      <nav className="bg-red-600 text-white px-6 py-2 flex justify-start overflow-x-auto whitespace-nowrap scrollbar-hide">
        {["HOME", "CRM", "UTILITIES", "INSURANCE", "ASSETS", "MUTUAL", "RESEARCH", "TRANSACT ONLINE", "GOAL GPS", "FINANCIAL PLANNING", "WEALTH REPORT", "OTHER"].map((item, index) => (
          <div key={index} className="text-sm font-medium hover:underline hover:bg-red-700 px-2 py-1 rounded cursor-pointer transition-colors">
            {item}
          </div>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
