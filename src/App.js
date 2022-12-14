import {
  Navbar,
  CountryCard,
  CountryList,
  CasesCard,
  Charts,
} from "./components";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="sm:grid md:grid grid-cols-3 max-h-60vh sticky top-16">
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
        <Routes>
          <Route element={<Charts />} path="/country/:countryId" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
