"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-red-600 text-white px-6 py-3 flex items-center justify-between shadow-lg">
      {/* Left - Logo and live portfolio status */}
      <div className="flex items-center space-x-4">
        <div className="text-xl font-bold">Wealth Elite</div>
        <div className="text-sm border border-white rounded-full px-2 py-1">
          My Live Portfolio
        </div>
      </div>

      {/* Center - Menu */}
      <ul className="flex space-x-6 text-sm font-medium">
        <li>CRM</li>
        <li>Utilities</li>
        <li>Insurance</li>
        <li>Assets</li>
        <li>Mutual</li>
        <li>Research</li>
        <li>Transact Online</li>
        <li>Goal GPS</li>
        <li>Financial Planning</li>
        <li>Wealth Report</li>
        <li>Other</li>
      </ul>

      {/* Right - Search, Icons, and Logout */}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 rounded-md text-gray-800"
        />
        <div className="flex space-x-2">
          {/* Placeholder for icons, matching the image */}
          <span className="text-xl">🔍</span>
          <span className="text-xl">🔔</span>
          <span className="text-xl">⚙️</span>
          <span className="text-xl">👤</span>
        </div>
        <button className="bg-white text-red-600 px-3 py-1 rounded-md font-semibold hover:bg-gray-100">
          LOGOUT
        </button>
      </div>
    </nav>
  );
};

export default Navbar;