import axios from 'axios';
import allActions from '~/action';
import AsyncStorage from '@react-native-community/async-storage';
import setCurrentUser from '~/AsyncStorage/User';

const baseUrl = 'https://7c5b38f3cc6b.ngrok.io';

const SignUp = (email, password, nickname, birthdate, gender, socialId, provider) => {
    const url = baseUrl + '/auth/signUp';

    let form = new FormData();

    form.append('email', email);
    form.append('password', password);
    form.append('nickname', nickname);
    form.append('birthdate', birthdate);
    form.append('gender', gender);
    form.append('socialId', socialId);
    form.append('provider', provider);

    return new Promise(function (resolve, reject) {
        axios
          .post(url, form, {
            //withCredentials: true,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Accept: 'application/json; charset=utf-8' 
            },
          })
          .then(function (response) {
            console.log('response : ', response);
            resolve(response);
            if (response.status === 201) {
              console.log('회원가입 성공');
              setCurrentUser(email, "login");
            } else if(response.status === 400) {
              console.log("response", response);
            }
          })
          .catch(function (response) {
            console.log("response", response);
          });
      });
}

export default SignUp;