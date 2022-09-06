import { CircularProgress, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import {
  Navbar,
  CountryCard,
  CountryList,
  Charts,
  CasesCard,
} from "./components";
import { useGetCovidByStatsQuery } from "./services/covidApi";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="grid grid-cols-3">
          <Routes>
            <Route element={<CountryCard />} path="/country/:countryId" />
          </Routes>
          <Routes>
            <Route element={<CasesCard />} path="/country/:countryId" />
          </Routes>
          <Routes>
            <Route element={<CountryList />} path="/country" />
          </Routes>
          <CountryList />
        </div>
      </Router>
    </div>
  );
}

export default App;
