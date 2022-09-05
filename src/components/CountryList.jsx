import millify from "millify";
import React from "react";
import { useGetCovidByStatsQuery } from "../services/covidApi";

const CountryList = ({ country, continent, population }) => {
  // console.log("Done", data.response);
  // continent, country, population
  return (
    <div>
      <div className="flex justify-between p-2 cursor-pointer hover:bg-slate-100">
        <div className="">
          <p className="font-bold text-slate-600">{country || "Unknown"}</p>
          <p className="font-normal text-slate-500">{continent || "Unknown"}</p>
        </div>
        <div>
          <p className="font-normal text-slate-500">
            {millify(population)} people
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CountryList;
