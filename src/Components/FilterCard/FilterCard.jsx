import React from 'react';
import './filterCard.css';
import ButtonColumns from './ButtonColumns';
import FilterSubHeading from './FilterSubHeading';

const FilterCard = ({
    launchYear, hasSuccessfullyLaunched, hasSuccessfullyLanded,
    setLaunchYear, setHasSuccessfullyLaunched, setHasSuccessfullyLanded }) => {

    return (
        <div className="filter-card">
            <h1>Filters</h1>
            <div style={{ textAlign: 'center' }}>
                <FilterSubHeading text="Launch Year" />

                <ButtonColumns
                    selected={launchYear}
                    buttonTexts={[...Array(15).keys()].map((val) => val + 2006)}
                    onClick={setLaunchYear}
                />

                <FilterSubHeading text="Successful Launch" />

                <ButtonColumns
                    selected={hasSuccessfullyLaunched}
                    buttonTexts={[true, false]}
                    onClick={setHasSuccessfullyLaunched}
                />

                <FilterSubHeading text="Successful Landing" />

                <ButtonColumns
                    selected={hasSuccessfullyLanded}
                    buttonTexts={[true, false]}
                    onClick={setHasSuccessfullyLanded}
                />
            </div>
        </div>
    );
}

export default FilterCard;

