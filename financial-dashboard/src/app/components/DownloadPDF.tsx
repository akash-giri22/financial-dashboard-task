"use client";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function DownloadPDF() {
  const handleDownload = async () => {
    const input = document.getElementById("dashboard");
    if (!input) return;

    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("financial-dashboard.pdf");
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
    >
      Download PDF
    </button>
  );
}
