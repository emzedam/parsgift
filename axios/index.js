import axios from "axios";
const api = axios.create({
    baseURL: "https://api.suringift.com/api"
})

export default api