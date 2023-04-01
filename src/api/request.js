import axios from "axios"


const BASE_URL="http://go-dev.greedygame.com/v3"

const fetchData=(startDate,endDate)=>axios.get(`${BASE_URL}/dummy/report?startDate=${startDate}&endDate=${endDate}`)


const fetchApps=()=>axios.get(`${BASE_URL}/dummy/apps`)

export {fetchData,fetchApps}