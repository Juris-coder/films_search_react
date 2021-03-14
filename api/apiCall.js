import { API_ENDPOINT, API_KEY } from "../configs/env";

export const apiCall = async (query) => {
  const request = await fetch(`${API_ENDPOINT}${API_KEY}&query=${query}`);
  const result = await request.json();
  return result;
};