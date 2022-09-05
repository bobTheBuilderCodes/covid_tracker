import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";

import Chart from "chart.js/auto";

const Charts = () => {
  return (
    <div className="h-80 flex flex-col justify-between gap-4 w-100 mx-4 my-4 md:grid grid-cols-1 lg:grid-cols-2 xl:h-[-120] ">
      <div className=" flex-1 md:w-100">
        {/* <BarChart /> */}
        <Bar
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
              {
                label: "Total Income",
                data: [65, 59, 60, 81, 56, 55, 40],
                backgroundColor: "#FE8500",
                borderWidth: 2.5,
                barThickness: 15,
              },
              // Second label
              {
                label: "Total Expenses ",
                data: [45, 19, 34, 51, 76, 65, 38],
                backgroundColor: "#016EC1",
                borderWidth: 2.5,
                barThickness: 15,
              },
            ],
          }}
          width={1400}
          //   height={400}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
};

export default Charts;
