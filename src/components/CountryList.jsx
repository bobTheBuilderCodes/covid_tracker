import { nanoid } from "@reduxjs/toolkit";
import millify from "millify";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useGetCovidByStatsQuery } from "../services/covidApi";

const CountryList = ({ country, continent, population }) => {
  // console.log("Done", data.response);
  // continent, country, population

  const { data, isFetching } = useGetCovidByStatsQuery();
  const [searchCountry, setSearchCountry] = useState("");

  // const countryDetails = data?.response;
  const countryDetails = data?.response.filter(
    (country) => country.population && country.continent
  );

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const handleCountrySearch = () => {
      const searchedCountry = countryDetails?.filter((country) =>
        country?.country?.includes(searchCountry)
      );
      setCountries(searchedCountry);
    };
    handleCountrySearch();
  }, []);

  const countryId = useParams();
  console.log("Params", countryId);

  const navigate = useNavigate();

  return (
    <div className="max-h-[90vh] overflow-y-scroll">
      {countryDetails?.map(({ continent, population, country }) => (
        <div
          onClick={() => navigate(`/country/${country}`)}
          className="flex justify-between p-2 cursor-pointer hover:bg-slate-100"
          key={nanoid()}
        >
          <div className="">
            <p className="font-bold text-slate-600">{country || "Unknown"}</p>
            <p className="font-normal text-slate-500">
              {continent || "Unknown"}
            </p>
          </div>
          <div>
            <p className="font-normal text-slate-500">
              {millify(population)} people
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
