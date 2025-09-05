"use client";

import { useState } from "react";
import useIsDark from "./hooks/useIsDark";
import Charts from "./components/Charts";
import DownloadPDF from "./components/DownloadPDF";

export default function Dashboard() {
  const [range, setRange] = useState("7 Days");
  const isDark = useIsDark();

  // Dynamic colors for dark mode
  const aumColor = isDark ? "#60a5fa" : "#0088FE";
  const sipColor = isDark ? "#fb923c" : "#FF8042";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black dark:text-white p-6">
      {/* ---- Top Heading & PDF Button ---- */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Financial Dashboard</h1>
        <DownloadPDF />
      </div>

      {/* ---- AUM & SIP Cards (Matching image layout) ---- */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold mb-1">AUM</h2>
            <button className="text-red-600 text-sm font-semibold hover:underline">
              View Report
            </button>
          </div>
          <p className="text-2xl font-bold mt-2">₹12.19 Cr</p>
          <div className="flex items-center mt-1">
            <span className="text-green-600 text-sm mr-2">+0.77% MoM</span>
            <span className="text-blue-600 text-sm hover:underline cursor-pointer">
              View Trend
            </span>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold mb-1">SIP</h2>
            <button className="text-red-600 text-sm font-semibold hover:underline">
              View Report
            </button>
          </div>
          <p className="text-2xl font-bold mt-2">₹1.39 Lakh</p>
          <div className="flex items-center mt-1">
            <span className="text-red-600 text-sm mr-2">-0% MoM</span>
            <span className="text-blue-600 text-sm hover:underline cursor-pointer">
              View Trend
            </span>
          </div>
        </div>
      </div>

      {/* ---- Time Range Filter ---- */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["3 Days", "7 Days", "10 Days", "30 Days"].map((r) => (
          <button
            key={r}
            onClick={() => setRange(r)}
            className={`px-4 py-2 rounded-lg border transition-colors ${
              range === r
                ? "bg-red-600 text-white border-red-600"
                : "bg-white dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* ---- Stat Cards (Matching image layout) ---- */}
      <div className="grid md:grid-cols-5 gap-4 mb-6">
        {[
          { title: "Purchases", value: "₹0.00 Cr", icon: "🛒", change: "7" },
          { title: "Redemptions", value: "₹0.00 Cr", icon: "💳", change: "0" },
          { title: "Rejected Txns", value: "₹0.00 Cr", icon: "🚫", change: "0" },
          { title: "SIP Rejections", value: "₹0.00 Cr", icon: "❌", change: "0" },
          { title: "New SIP", value: "₹0.00 Cr", icon: "🆕", change: "0" },
        ].map((stat, i) => (
          <div
            key={i}
            className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-md transition-shadow flex flex-col items-center text-center"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {stat.title}
            </h3>
            <p className="text-xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* ---- Charts Section (from Charts.tsx) ---- */}
      <Charts />
    </div>
  );
}