import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.MELI_API,
  headers: { "Content-Type": "application/json" },
});

export { axiosClient };
