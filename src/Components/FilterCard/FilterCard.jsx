import React from 'react';
import './filterCard.css';
import ButtonColumns from './ButtonColumns';
import FilterSubHeading from './FilterSubHeading';
import { useDispatch, useSelector } from 'react-redux';
import ACTIONS from '../../redux/actions';

const FilterCard = () => {
    const dispatch = useDispatch();
    const setFilter = filter => value => dispatch(ACTIONS.setLaunchFilter({[filter]: value}));
    const { launchYear, hasSuccessfullyLaunched, hasSuccessfullyLanded } = useSelector(({ filter }) => filter)
    return (
        <div className="filter-card">
            <h2>Filters</h2>
            <div style={{ textAlign: 'center' }}>
                <FilterSubHeading text="Launch Year" />

                <ButtonColumns
                    selected={launchYear}
                    buttonTexts={[...Array(15).keys()].map((val) => val + 2006)}
                    setFilter={setFilter('launchYear')}
                />

                <FilterSubHeading text="Successful Launch" />

                <ButtonColumns
                    selected={hasSuccessfullyLaunched}
                    buttonTexts={[true, false]}
                    setFilter={setFilter('hasSuccessfullyLaunched')}
                />

                <FilterSubHeading text="Successful Landing" />

                <ButtonColumns
                    selected={hasSuccessfullyLanded}
                    buttonTexts={[true, false]}
                    setFilter={setFilter('hasSuccessfullyLanded')}
                />
            </div>
        </div>
    );
}

export default FilterCard;

