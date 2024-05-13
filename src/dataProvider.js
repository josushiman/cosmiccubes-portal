import { fetchUtils } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const httpClient = async (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }

  options.headers.set("x-token", import.meta.env.VITE_JSON_SERVER_TOKEN);
  const { status, headers, body, json } = await fetchUtils.fetchJson(
    url,
    options
  );

  // console.log("fetchJson result", { status, headers, body, json });
  return { status, headers, body, json };
};

export const dataProvider = jsonServerProvider(
  import.meta.env.VITE_JSON_SERVER_URL,
  httpClient
);
