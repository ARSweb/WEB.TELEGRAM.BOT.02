import axios from "axios";
const api = axios.create({
    baseURL: "https://vigilant-acceptance-production-1b9b.up.railway.app"
})
export default api