import axios from "axios";
const api = axios.create({
    baseURL: "https://api.giftparsi.ir/api"
})

export default api