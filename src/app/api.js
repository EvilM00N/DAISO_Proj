import axios from "axios";


axios.defaults.baseURL =  process.env.REACT_APP_API_URL;

const response = (resp) => resp.data;

const requests = {
    get: (url) => axios.get(url).then(response)
}

const endPoints = {
    RomanToArabic: (i) => requests.get(`/conversion/romanTOarabic/${i}`)
}

export default endPoints;