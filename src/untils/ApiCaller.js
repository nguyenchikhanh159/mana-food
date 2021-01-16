import axios from 'axios';
import * as Config from './../constants/Config';

export default function callApi(endpoint,method,body){
    return axios({
        method:method,
        url:`${Config.API_URL}/${endpoint}`,
        data:body
    }).catch(err=>{
        console.log(err);
    });
};
// export default function setAuthorization(token){
//     if(token){
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     }
//     else{
//         delete axios.defaults.headers.common['Authorization']
//     }
// } 