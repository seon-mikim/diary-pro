import axios from "axios"


const API =  axios.create({
    baseURL: "http://13.125.243.242/",
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true,
})

export default API