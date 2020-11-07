import React, { useEffect } from 'react';
import { LaunchCard, FilterCard } from '../../Components';
import getSpaceXLaunches from '../../DataSource/spaceXAPI';
import './launchList.css';
import { splitArr, getSearchString } from '../../helpers';
import { useHistory, useLocation } from "react-router-dom";
import useDidUpdateEffect from '../../customHooks';
import { useDispatch, useSelector } from 'react-redux';
import ACTIONS from '../../redux/actions';


const LaunchList = () => {
    const history = useHistory();
    const loaction = useLocation();
    const dispatch = useDispatch();

    const {filter, data} = useSelector(store => store)

    useDidUpdateEffect(() => {
        const searchString = getSearchString(filter);
        history.push(searchString.replace('&', '?'))
    }, [filter, history]);


    useEffect(() => {
        const fetchData = async () => {
            const searchString = loaction.search;
            dispatch(ACTIONS.setLaunchData((await getSpaceXLaunches(searchString.replace('?', '&'))).data))
        }
        fetchData();
    }, [loaction, dispatch]);

    return (
        <>
            <h1>SpaceX Launch Programs</h1>
            <div className="main-row">
                <div className="filter-column">
                    <FilterCard />
                </div>
                <div className="launch-column">
                    <div className="row">
                        {splitArr(data).map((chunk, i) => (
                            <div className="column" key={i}>
                                {chunk.map((Data) => <LaunchCard data={Data} key={data.flight_number} />)}
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

