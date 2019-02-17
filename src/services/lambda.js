import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9000", //"/.netlify/functions/",
  timeout: 1000
});

export default {
  get: async (url, token) =>
    instance.get(url, { headers: { Authorization: `Bearer ${token}` } })
};
