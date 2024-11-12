// src/BarChart.js
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = () => {
  const chartRef = useRef(null); // Reference for the canvas

  useEffect(() => {
    // Initialize chart with Chart.js
    const ctx = chartRef.current.getContext("2d");
    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
        datasets: [
          {
            label: "Product Prices",
            data: [329.85, 44.6, 615.89, 31.98, 6950],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function to destroy chart instance when component unmounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} width="400" height="200"></canvas>;
};

export default BarChart;
