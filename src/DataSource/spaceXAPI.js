import axios from 'axios';

const getSpaceXLaunches =
    (searchString) => {
        return axios.get(`https://api.spacexdata.com/v3/launches?limit=100${searchString}`)
    }

export default getSpaceXLaunches;
