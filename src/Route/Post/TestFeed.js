import axios from 'axios';
const baseUrl = 'https://d071a92d862d.ngrok.io'; 

const GetAllFeed = () => {
    url = baseUrl + "/feed/testFeed";

    return new Promise(function(resolve, reject) {
        axios
        .get(url)
        .then(function(response) {
            resolve(response.data)
        })
        .catch(function(error) {
          reject(error);  
        })
    })
}

export default GetAllFeed;