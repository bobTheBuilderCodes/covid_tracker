import { TextField } from "@mui/material";
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

  const [countries, setCountries] = useState(countryDetails);

  const handleCountrySearch = () => {
    const searchedCountry = countryDetails?.filter((country) =>
      country?.country?.includes(searchCountry)
    );
    setCountries(searchedCountry);
  };

  useEffect(() => {
    handleCountrySearch();
    console.log("I am actually running...");
    console.log(countries);
  }, [searchCountry]);

  const countryId = useParams();

  const navigate = useNavigate();

  return (
    <div>
      <TextField
        placeholder="Search"
        label="Search country"
        size="small"
        fullWidth
        value={searchCountry}
        onChange={(event) => setSearchCountry(event.target.value)}
        sx={{ margin: 2, width: "90%" }}
      />
      <div className="max-h-[80vh] overflow-y-scroll">
        {countries?.map(({ continent, population, country }) => (
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
    </div>
  );
};

export default CountryList;
