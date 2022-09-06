import { nanoid } from "@reduxjs/toolkit";
import millify from "millify";
import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetCovidByStatsQuery,
  useGetCovidDetailsQuery,
} from "../services/covidApi";

const CountryCard = ({ country, continent, population, death }) => {
  const { countryId } = useParams();
  const { data } = useGetCovidByStatsQuery();

  // console.log(data?.response, "Ghana details");

  const getCountryStats = (countryId) =>
    data?.response.filter((country) => country?.country === countryId);

  let currentCountries = getCountryStats(countryId);

  return (
    <div>
      {currentCountries?.map(({ continent, country, population, deaths }) => (
        <div
          className="grid grid-cols-2 h-36 bg-slate-600 text-white p-2 pl-4 m-4 card border-b-8 border-r-8 flex-wrap"
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
    </div>
  );
};

export default CountryCard;
