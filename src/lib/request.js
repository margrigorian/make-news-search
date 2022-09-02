import axios from "axios";

function request(method, url) {
    return axios({method, url, headers: {
        "X-RapidAPI-Key": "16b4852e14msh946f5abb4a76cdfp1b1978jsnfbf7a4dbd6ac",
        "X-RapidAPI-Host": "free-news.p.rapidapi.com"
      }})
}

export default request;