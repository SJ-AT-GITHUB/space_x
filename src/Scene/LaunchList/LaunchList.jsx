import React, { useState, useEffect } from 'react';
import { LaunchCard, FilterCard } from '../../Components';
import getSpaceXLaunches from '../../DataSource/spaceXAPI';


const LaunchList = () => {
    const [launchYear, setLaunchYear] = useState();
    const [hasSuccessfullyLaunched, setHasSuccessfullyLaunched] = useState();
    const [hasSuccessfullyLanded, setHasSuccessfullyLanded] = useState();
    const [launchData, setLaunchData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLaunchData((await getSpaceXLaunches({ launchYear, hasSuccessfullyLaunched, hasSuccessfullyLanded })).data)
        }
        fetchData();
    }, [launchYear, hasSuccessfullyLaunched, hasSuccessfullyLanded]);

    return (
        <>
            <FilterCard
                {...{
                    launchYear, hasSuccessfullyLaunched, hasSuccessfullyLanded,
                    setLaunchYear, setHasSuccessfullyLaunched, setHasSuccessfullyLanded,
                }}
            />
            {launchData.map((data) => <LaunchCard data={data} key={data.flight_number} />)}
        </>
    )
}

export default LaunchList;

