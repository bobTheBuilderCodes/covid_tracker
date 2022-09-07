import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import millify from "millify";
import { useParams } from "react-router-dom";
import { useGetCovidByStatsQuery } from "../services/covidApi";

const CountryCard = () => {
  const { countryId } = useParams();
  const { data } = useGetCovidByStatsQuery();

  const getCountryStats = (countryId) =>
    data?.response.filter((country) => country?.country === countryId);

  const currentCountries = getCountryStats(countryId);

  return (
    <>
      {currentCountries?.map(({ continent, country, population, deaths }) => (
        <div
          className=" sticky top-16 grid grid-cols-2 h-36 bg-slate-600 text-white p-2 pl-4 m-4 card border-b-8 border-r-8 flex-wrap"
          key={nanoid()}
        >
          <div>
            <p className="font-semibold text-lg">Continent</p>
            <p className="">{continent || "NA"}</p>
          </div>
          <div>
            <p className="font-semibold text-lg">Country</p>
            <p className="">{country || "NA"}</p>
          </div>
          <div>
            <p className="font-semibold text-lg">Population</p>
            <p className="">{millify(population) || "NA"}</p>
          </div>
          <div>
            <p className="font-semibold text-lg">Death Cases</p>
            <p className="">{deaths?.total || "NA"}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CountryCard;
