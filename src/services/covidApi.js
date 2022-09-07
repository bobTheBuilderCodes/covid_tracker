import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const covidApiHeaders = {
  "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  "X-RapidAPI-Key": "22bb234527msh843e8bb21458d39p155222jsnef0125281df4",
};

const createRequest = (url) => ({ url, headers: covidApiHeaders });
const baseUrl = "https://covid-193.p.rapidapi.com";

export const covidApi = createApi({
  reducerPath: "covidApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCovidByStats: builder.query({
      query: () => createRequest("/statistics"),
    }),
    getCovidDetails: builder.query({
      query: (countryId) => createRequest(`statistics/${countryId}`),
    }),
  }),
});

export const { useGetCovidByStatsQuery, useGetCovidDetailsQuery } = covidApi;
