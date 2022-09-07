import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";

import Chart from "chart.js/auto";
import { useGetCovidByStatsQuery } from "../services/covidApi";
import { useParams } from "react-router-dom";

const Charts = () => {
  const { countryId } = useParams();
  const { data } = useGetCovidByStatsQuery();

  const getCountryStats = (countryId) =>
    data?.response.filter((country) => country?.country === countryId);

  const currentCountries = getCountryStats(countryId);
  console.log("Current graph data", currentCountries);

  return (
    <div
      className="sticky bottom-120 h-80 flex flex-col justify-between gap-4 w-100 mx-4 md:grid grid-cols-1 lg:grid-cols-2 xl:h-[-120]"
      style={{ position: "sticky", bottom: "120px" }}
    >
      <div className=" flex-1 md:w-100">
        {currentCountries?.map(({ cases, deaths, country }) => (
          <Bar
            data={{
              // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              labels: [`Statistics for ${country}`],
              datasets: [
                {
                  label: "Total Deaths",
                  data: [`${deaths.total}`],

                  backgroundColor: "#FE8500",
                  borderWidth: 2.5,
                  barThickness: 35,
                },
                // Second label
                // {
                //   label: "Recovered ",
                //   data: [`${cases.recovered}`],
                //   backgroundColor: "#016EC1",
                //   borderWidth: 2.5,
                //   barThickness: 15,
                // },
                // Third label
                {
                  label: "New cases ",
                  data: [`${cases.new}`],
                  backgroundColor: "#C74329",
                  borderWidth: 2.5,
                  barThickness: 35,
                },
                // Fourth label
                {
                  label: "Active cases ",
                  data: [`${cases.active}`],
                  backgroundColor: "#763D1C",
                  borderWidth: 2.5,
                  barThickness: 35,
                },
              ],
            }}
            width={1400}
            //   height={400}
            options={{
              maintainAspectRatio: false,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Charts;
