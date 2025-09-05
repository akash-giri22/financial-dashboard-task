// src/app/data/mock-api.ts

export const fetchDashboardData = async (range: string) => {
  // Simulate API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      let data;
      switch (range) {
        case "3 Days":
          data = {
            mainStats: {
              aum: "₹12.01 Cr",
              aumChange: "+0.55%",
              sip: "₹1.35 Lakh",
              sipChange: "+0.2%",
            },
            miniStats: [
              { title: "Purchases", value: "₹0.10 Cr", icon: "🛒" },
              { title: "Redemptions", value: "₹0.02 Cr", icon: "💳" },
              { title: "Rejected Txns", value: "₹0.01 Cr", icon: "🚫" },
              { title: "SIP Rejections", value: "₹0.00 Cr", icon: "❌" },
              { title: "New SIP", value: "₹0.01 Cr", icon: "🆕" },
            ],
            charts: {
              sipBusiness: {
                labels: ["Mon", "Tue", "Wed"],
                barData: [100, 110, 120],
                lineData: [90, 105, 115],
              },
              monthlyMis: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [
                  { label: "Revenue", data: [65, 59, 80, 81, 56, 55], borderColor: "rgba(75,192,192,1)" },
                  { label: "Expenses", data: [28, 48, 40, 19, 86, 70], borderColor: "rgba(255,99,132,1)" },
                  { label: "Profit", data: [37, 11, 40, 62, -30, -15], borderColor: "rgba(100,200,100,1)" },
                ],
              },
            },
          };
          break;
        case "7 Days":
          data = {
            mainStats: {
              aum: "₹12.19 Cr",
              aumChange: "+0.77%",
              sip: "₹1.39 Lakh",
              sipChange: "+0.0%",
            },
            miniStats: [
              { title: "Purchases", value: "₹0.05 Cr", icon: "🛒" },
              { title: "Redemptions", value: "₹0.01 Cr", icon: "💳" },
              { title: "Rejected Txns", value: "₹0.00 Cr", icon: "🚫" },
              { title: "SIP Rejections", value: "₹0.00 Cr", icon: "❌" },
              { title: "New SIP", value: "₹0.00 Cr", icon: "🆕" },
            ],
            charts: {
              sipBusiness: {
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                barData: [120, 150, 180, 90, 200, 130, 160],
                lineData: [100, 130, 160, 80, 190, 120, 150],
              },
              monthlyMis: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [
                  { label: "Revenue", data: [65, 59, 80, 81, 56, 70], borderColor: "rgba(75,192,192,1)" },
                  { label: "Expenses", data: [28, 48, 40, 19, 86, 50], borderColor: "rgba(255,99,132,1)" },
                  { label: "Profit", data: [37, 11, 40, 62, -30, 20], borderColor: "rgba(100,200,100,1)" },
                ],
              },
            },
          };
          break;
        case "10 Days":
          data = {
            mainStats: {
              aum: "₹13.50 Cr",
              aumChange: "+1.21%",
              sip: "₹1.45 Lakh",
              sipChange: "+0.5%",
            },
            miniStats: [
              { title: "Purchases", value: "₹0.15 Cr", icon: "🛒" },
              { title: "Redemptions", value: "₹0.05 Cr", icon: "💳" },
              { title: "Rejected Txns", value: "₹0.02 Cr", icon: "🚫" },
              { title: "SIP Rejections", value: "₹0.01 Cr", icon: "❌" },
              { title: "New SIP", value: "₹0.05 Cr", icon: "🆕" },
            ],
            charts: {
              sipBusiness: {
                labels: ["Day 1", "...", "Day 10"],
                barData: [110, 125, 140, 130, 150, 160, 170, 180, 190, 200],
                lineData: [100, 120, 135, 125, 145, 155, 165, 175, 185, 195],
              },
              monthlyMis: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [
                  { label: "Revenue", data: [70, 65, 85, 80, 60, 65], borderColor: "rgba(75,192,192,1)" },
                  { label: "Expenses", data: [30, 50, 45, 20, 90, 60], borderColor: "rgba(255,99,132,1)" },
                  { label: "Profit", data: [40, 15, 40, 60, -30, 5], borderColor: "rgba(100,200,100,1)" },
                ],
              },
            },
          };
          break;
        case "30 Days":
          data = {
            mainStats: {
              aum: "₹14.22 Cr",
              aumChange: "+1.52%",
              sip: "₹1.55 Lakh",
              sipChange: "+0.8%",
            },
            miniStats: [
              { title: "Purchases", value: "₹0.50 Cr", icon: "🛒" },
              { title: "Redemptions", value: "₹0.10 Cr", icon: "💳" },
              { title: "Rejected Txns", value: "₹0.05 Cr", icon: "🚫" },
              { title: "SIP Rejections", value: "₹0.03 Cr", icon: "❌" },
              { title: "New SIP", value: "₹0.12 Cr", icon: "🆕" },
            ],
            charts: {
              sipBusiness: {
                labels: ["Day 1", "...", "Day 30"],
                barData: [130, 145, 155, 165, 175, 185, 195, 205, 215, 225],
                lineData: [120, 140, 150, 160, 170, 180, 190, 200, 210, 220],
              },
              monthlyMis: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [
                  { label: "Revenue", data: [75, 70, 90, 85, 65, 75], borderColor: "rgba(75,192,192,1)" },
                  { label: "Expenses", data: [35, 55, 50, 25, 95, 65], borderColor: "rgba(255,99,132,1)" },
                  { label: "Profit", data: [40, 15, 40, 60, -30, 10], borderColor: "rgba(100,200,100,1)" },
                ],
              },
            },
          };
          break;
        default: // Default case (originally 7 Days)
          data = {
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
                labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                barData: [120, 150, 180, 90, 200],
                lineData: [100, 130, 160, 80, 190],
              },
              monthlyMis: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                datasets: [
                  { label: "Revenue", data: [65, 59, 80, 81, 56], borderColor: "rgba(75,192,192,1)" },
                  { label: "Expenses", data: [28, 48, 40, 19, 86], borderColor: "rgba(255,99,132,1)" },
                  { label: "Profit", data: [37, 11, 40, 62, -30], borderColor: "rgba(100,200,100,1)" },
                ],
              },
            },
          };
          break;
      }
      resolve(data);
    }, 500); // 500ms delay to simulate network latency
  });
};
