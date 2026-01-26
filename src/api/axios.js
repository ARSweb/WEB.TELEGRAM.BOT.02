import axios from "axios";
const api = axios.create({
    baseURL: "https://webtelegrambot02server-production.up.railway.app"
})
export default api