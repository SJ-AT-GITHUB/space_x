import React, { useState, useEffect } from 'react';
import { LaunchCard, FilterCard } from '../../Components';
import getSpaceXLaunches from '../../DataSource/spaceXAPI';
import './launchList.css';
import { splitArr, getSearchString } from '../../helpers';
import { useHistory, useLocation } from "react-router-dom";


const LaunchList = () => {
    const [launchYear, setLaunchYear] = useState();
    const [hasSuccessfullyLaunched, setHasSuccessfullyLaunched] = useState();
    const [hasSuccessfullyLanded, setHasSuccessfullyLanded] = useState();
    const [launchData, setLaunchData] = useState([]);

    const history = useHistory();
    const loaction = useLocation();

    useEffect(() => {
        const searchString = getSearchString({ launchYear, hasSuccessfullyLaunched, hasSuccessfullyLanded });
        console.log('#1', searchString);
        history.push(searchString.replace('&', '?'))
    }, [launchYear, hasSuccessfullyLaunched, hasSuccessfullyLanded, history]);


    useEffect(() => {
        const fetchData = async () => {
            const searchString = loaction.search;
            console.log('#2', searchString);
                setLaunchData((await getSpaceXLaunches(searchString.replace('?', '&'))).data)
        }
        fetchData();
    }, [loaction]);

    console.log('state:::', { launchYear, hasSuccessfullyLaunched, hasSuccessfullyLanded });


    return (
        <>
            <h1>SpaceX Launch Programs</h1>
            <div className="main-row">
                <div className="filter-column">
                    <FilterCard
                        {...{
                            launchYear, hasSuccessfullyLaunched, hasSuccessfullyLanded,
                            setLaunchYear, setHasSuccessfullyLaunched, setHasSuccessfullyLanded,
                        }}
                    />
                </div>
                <div className="launch-column">
                    <div className="row">
                        {splitArr(launchData).map((chunk, i) => (
                            <div className="column" key={i}>
                                {chunk.map((data) => <LaunchCard data={data} key={data.flight_number} />)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <span style={{ fontWeight: 'bold' }}>Developed by: </span><span>Shubham Jain</span>
            </div>
        </>
    )
}

export default LaunchList;

