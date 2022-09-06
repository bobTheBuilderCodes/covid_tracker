import React from "react";
import { useGetCovidByStatsQuery } from "../services/covidApi";

const CountryCard = ({
  new_cases,
  active_cases,
  critical_cases,
  recovered_cases,
}) => {
  return (
    <div className=" grid grid-cols-2 h-36 bg-slate-600 text-white p-2 pl-4 m-4 card border-b-8 border-r-8 flex-wrap">
      <div>
        <p className="font-semibold text-lg">New Cases</p>
        <p className="">{new_cases}</p>
      </div>
      <div>
        <p className="font-semibold text-lg">Active Cases</p>
        <p className="">{active_cases}</p>
      </div>
      <div>
        <p className="font-semibold text-lg">Critical Cases</p>
        <p className="">{critical_cases}</p>
      </div>
      <div>
        <p className="font-semibold text-lg">Recovered Cases</p>
        <p className="">{recovered_cases}</p>
      </div>
    </div>
  );
};

export default CountryCard;
