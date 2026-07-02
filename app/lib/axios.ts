import axios from "axios";

const instance = axios.create({
  baseURL: "https://invicta-kent-admin.xyz/api",
  timeout: 10000,
});

export default instance;
