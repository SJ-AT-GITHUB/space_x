import axios from 'axios';

const getSpaceXLaunches =
    ({ launchYear, hasSuccessfullyLaunched, hasSuccessfullyLanded }) => {
        let searchString = '';
        if (launchYear) searchString += `&launch_year=${launchYear}`
        if (hasSuccessfullyLaunched && typeof hasSuccessfullyLaunched === 'boolean') {
            searchString += `&launch_success=${hasSuccessfullyLaunched}`
        }
        if (hasSuccessfullyLanded && typeof hasSuccessfullyLanded === 'boolean') {
            searchString += `&land_success=${hasSuccessfullyLanded}`
        }
        return axios.get(`https://api.spacexdata.com/v3/launches?limit=100${searchString}`)
    }

export default getSpaceXLaunches;
