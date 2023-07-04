import APIRequest from '../../utils/config/axios.config';

export function getRandomUser(){
    return APIRequest.get('/'); // https://randomuser.me/api/
}

