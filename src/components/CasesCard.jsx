import React from "react";
import { useParams } from "react-router-dom";
import { useGetCovidByStatsQuery } from "../services/covidApi";

const CountryCard = () => {
  const { countryId } = useParams();
  const { data } = useGetCovidByStatsQuery();

  const getCountryStats = (countryId) =>
    data?.response.filter((country) => country?.country === countryId);

  const currentCountries = getCountryStats(countryId);

  return (
    <div>
      {currentCountries?.map(({ cases }) => (
        <div className="sticky top-16 grid grid-cols-2 place-items-center h-48 bg-slate-600 text-white p-2 pl-4 m-4 card border-b-8 border-r-8 flex-wrap">
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
