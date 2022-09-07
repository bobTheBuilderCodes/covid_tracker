import { TextField } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import millify from "millify";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCovidByStatsQuery } from "../services/covidApi";

const CountryList = () => {
  const { data, isFetching } = useGetCovidByStatsQuery();
  const [searchCountry, setSearchCountry] = useState("Ghana");

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
  }, [searchCountry]);

  const navigate = useNavigate();

  // if(isFetching) return 'loading...'
  return (
    <div className="">
      <TextField
        placeholder="Search"
        label="Search country"
        size="small"
        fullWidth
        value={searchCountry}
        onChange={(event) => setSearchCountry(event.target.value)}
        sx={{ margin: 2, width: "90%" }}
      />
      <div className="max-h-[80vh] overflow-y-scroll sticky top-16">
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
