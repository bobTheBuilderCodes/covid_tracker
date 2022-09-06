import React from "react";
import { useParams } from "react-router-dom";
import { useGetCovidByStatsQuery } from "../services/covidApi";

const CountryCard = ({
  new_cases,
  active_cases,
  critical_cases,
  recovered_cases,
}) => {
  const { countryId } = useParams();
  const { data } = useGetCovidByStatsQuery();
  // new cases, active cases, critical cases, recovered cases
  const getCountryStats = (countryId) =>
    data?.response.filter((country) => country?.country === countryId);

  let currentCountries = getCountryStats(countryId);

  return (
    <div>
      {currentCountries?.map(({ cases }) => (
        <div className=" grid grid-cols-2 h-36 bg-slate-600 text-white p-2 pl-4 m-4 card border-b-8 border-r-8 flex-wrap">
          <div>
            <p className="font-semibold text-lg">New Cases</p>
            <p className="">{cases.new || "Unknown"}</p>
          </div>
          <div>
            <p className="font-semibold text-lg">Active Cases</p>
            <p className="">{cases.active || "Unknown"}</p>
          </div>
          <div>
            <p className="font-semibold text-lg">Critical Cases</p>
            <p className="">{cases.critical || "Unknown"}</p>
          </div>
          <div>
            <p className="font-semibold text-lg">Recovered Cases</p>
            <p className="">{cases.recovered || "Unknown"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryCard;
