import { configureStore } from "@reduxjs/toolkit";
import { covidApi } from "../services/covidApi";

const store = configureStore({
  reducer: {
    [covidApi.reducerPath]: covidApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(covidApi.middleware),
});

export default store;
