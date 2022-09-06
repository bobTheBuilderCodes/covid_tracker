import React from "react";
import { useParams } from "react-router-dom";
import { useGetCovidDetailsQuery } from "../services/covidApi";

const CountryCard = ({ country, continent, population, death }) => {
  const { countryId } = useParams();
  const { data } = useGetCovidDetailsQuery(countryId);
  console.log("Details query", data);
  return (
    <div className=" grid grid-cols-2 h-36 bg-slate-600 text-white p-2 pl-4 m-4 card border-b-8 border-r-8 flex-wrap">
      <div>
        <p className="font-semibold text-lg">Continent</p>
        <p className="">{continent}</p>
      </div>
      <div>
        <p className="font-semibold text-lg">Country</p>
        <p className="">{country}</p>
      </div>
      <div>
        <p className="font-semibold text-lg">Population</p>
        <p className="">{population}</p>
      </div>
      <div>
        <p className="font-semibold text-lg">Death Cases</p>
        <p className="">{death}</p>
      </div>
    </div>
  );
};

export default CountryCard;
