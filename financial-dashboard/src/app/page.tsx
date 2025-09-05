"use client";

import { useState, useEffect } from "react";
import useIsDark from "./hooks/useIsDark";
import Charts from "./components/Charts";
import DownloadPDF from "./components/DownloadPDF";
import MiniStatCard from "./components/MiniStatCard";
import { fetchDashboardData } from "./data/mock-api";

interface DashboardData {
  mainStats: {
    aum: string;
    aumChange: string;
    sip: string;
    sipChange: string;
  };
  miniStats: { title: string; value: string; icon: string }[];
  charts: {
    sipBusiness: { labels: string[]; barData: number[]; lineData: number[] };
    monthlyMis: any;
  };
}

const initialData: DashboardData = {
  mainStats: {
    aum: "₹12.19 Cr",
    aumChange: "+0.77%",
    sip: "₹1.39 Lakh",
    sipChange: "+0.0%",
  },
  miniStats: [
    { title: "Purchases", value: "₹0.00 Cr", icon: "🛒" },
    { title: "Redemptions", value: "₹0.00 Cr", icon: "💳" },
    { title: "Rejected Txns", value: "₹0.00 Cr", icon: "🚫" },
    { title: "SIP Rejections", value: "₹0.00 Cr", icon: "❌" },
    { title: "New SIP", value: "₹0.00 Cr", icon: "🆕" },
  ],
  charts: {
    sipBusiness: {
      labels: [],
      barData: [],
      lineData: [],
    },
    monthlyMis: {
      labels: [],
      datasets: [],
    },
  },
};

export default function Dashboard() {
  const [range, setRange] = useState("7 Days");
  const [data, setData] = useState<DashboardData>(initialData);
  const [loading, setLoading] = useState(false);
  const isDark = useIsDark();

  useEffect(() => {
    setLoading(true);
    fetchDashboardData(range).then((fetchedData: any) => {
      setData(fetchedData);
      setLoading(false);
    });
  }, [range]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black dark:text-white p-6">
      {/* ---- Top Heading & PDF Button ---- */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Financial Dashboard</h1>
        <DownloadPDF />
      </div>

      {/* ---- AUM & SIP Cards ---- */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold mb-1">AUM</h2>
            <button className="text-red-600 text-sm font-semibold hover:underline">
              View Report
            </button>
          </div>
          <p className="text-2xl font-bold mt-2">{data.mainStats.aum}</p>
          <div className="flex items-center mt-1">
            <span className={`text-sm mr-2 ${data.mainStats.aumChange.includes('+') ? "text-green-600" : "text-red-600"}`}>
              {data.mainStats.aumChange} MoM
            </span>
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
          <p className="text-2xl font-bold mt-2">{data.mainStats.sip}</p>
          <div className="flex items-center mt-1">
            <span className={`text-sm mr-2 ${data.mainStats.sipChange.includes('+') ? "text-green-600" : "text-red-600"}`}>
              {data.mainStats.sipChange} MoM
            </span>
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

      {/* ---- Stat Cards ---- */}
      <div className="grid md:grid-cols-5 gap-4 mb-6">
        {data.miniStats.map((stat, i) => (
          <MiniStatCard key={i} title={stat.title} value={stat.value} icon={stat.icon} />
        ))}
      </div>

      {/* ---- Charts Section ---- */}
      <Charts
        sipBusinessData={data.charts.sipBusiness}
        monthlyMisData={data.charts.monthlyMis}
        loading={loading}
      />
    </div>
  );
}
