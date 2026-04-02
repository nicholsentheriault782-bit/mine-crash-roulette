import axios from "axios";

const axiosServices = axios.create({
  baseURL: `mine-crash-roulette-production.up.railway.app`,
});
export default axiosServices;
