import React from "react";

const CountryList = () => {
  return (
    <div>
      <div className="flex justify-between p-2">
        <div className="">
          <p className="font-bold text-slate-600">Country name</p>
          <p className="font-normal text-slate-500">Continent</p>
        </div>
        <div>
          <p className="font-normal text-slate-500">2321 Cases</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CountryList;
