import APIRequest from '../../utils/config/axiosChuck.config';

export function getRandomJoke(){
    return APIRequest.get('/jokes/random'); // https://randomuser.me/api/
}