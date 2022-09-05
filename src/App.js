import { TextField } from "@mui/material";
import {
  Navbar,
  CountryCard,
  CountryList,
  Charts,
  CasesCard,
} from "./components";

function App() {
  return (
    <div className="">
      {/* Navbar */}
      <div>
        <Navbar />
      </div>
      {/* Main */}
      <div className="grid grid-cols-[66%,33%]">
        <div className=" h-[90vh] py-4">
          <div className="grid grid-cols-2 max-h-[45vh] ">
            <CountryCard
              country={"Ghana"}
              continent={"Africa"}
              population={"25 million"}
              death={"111"}
            />
            <CasesCard
              new_cases={"44"}
              active_cases={"3242"}
              critical_cases={"21"}
              recovered_cases={"432"}
            />
            {/* <Card /> */}
            {/* <Card /> */}
          </div>
          <div className=" mt-2 max-h-[45vh] max-w-[75vw] ">
            <div className="w-[75vw] mx-0">{/* <Charts /> */}</div>
          </div>
        </div>

        <div className=" max-h-[90vh] p-4 overflow-scroll">
          <div>
            <TextField
              placeholder="Country"
              fullWidth
              size="small"
              label="search country"
              sx={{ mt: 2, mb: 1 }}
            />
          </div>
          <CountryList />
          <CountryList />
          <CountryList />
          <CountryList />
          <CountryList />
          <CountryList />
          <CountryList />
          <CountryList />
        </div>
      </div>
      {/* Footer */}
    </div>
  );
}

export default App;
