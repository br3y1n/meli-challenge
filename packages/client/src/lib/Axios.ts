import Axios from "axios";

export const meliClient = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_MY_API,
});
