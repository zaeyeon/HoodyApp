import axios from 'axios';
const baseUrl = 'https://11f9deb512eb.ngrok.io'

const GETTagAutoComplete = (query) => {
    console.log("입력된 검색 키워드", query);

    const url = baseUrl + "/search/tag?q=" + query;
    
    return new Promise(function(resolve, reject) {
        axios
        .get(url)
        .then(function(response) {
            resolve(response.data)
        })
        .catch(function(error) {
            reject(error)
        })
    })
}

export default GETTagAutoComplete;