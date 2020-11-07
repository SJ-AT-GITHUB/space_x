import React from 'react';
import PropTypes from 'prop-types';
import './launchCard.css';
import LaunchAttribute from './LaunchAttribute';

const LaunchCard = ({ data }) => {
  const {
    flight_number,
    mission_name,
    launch_year,
    launch_success,
    rocket: { first_stage: { cores: [{ land_success }] } },
    mission_id,
    links: { mission_patch_small }
  } = data;
  return (
    <div className="launch-card">
      <div className="launch-img">
        <img
          component="img"
          alt="Mission_Image"
          src={mission_patch_small}
        />
      </div>
      <h1 className="launchNo">
        {`${mission_name} #${flight_number}`}
      </h1>
      <LaunchAttribute
        attributes={{
          'Mission Ids': mission_id,
          'Launch Year': launch_year,
          'Successful Launch': launch_success,
          'Successful Landing': land_success,
        }}
      />
    </div>
  );
}

LaunchCard.propTyes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default LaunchCard;

