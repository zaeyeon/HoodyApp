import axios from 'axios';
const baseUrl = 'http://hoody-api-test-server-alb-349396782.ap-northeast-2.elb.amazonaws.com';

const GETPostsByWroteTags = () => {
    const url = baseUrl + "/curation/postsByWroteTags";

    return new Promise(function(resolve, reject) {
        axios
        .get(url)
        .then(function(response) {
            resolve(response.data);
        })
        .catch(function(erro) {
            reject(error);
        })
    })
}

export default GETPostsByWroteTags;