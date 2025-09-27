import axios from "axios";

const instance = axios.create({
  baseURL: "https://invicta-kent-admin.xyz/api",
});

export default instance;
