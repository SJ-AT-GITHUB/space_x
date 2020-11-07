// types of action
const Types = {
    SET_LAUNCH_FILTER: "SET_LAUNCH_FILTER",
    SET_LAUNCH_DATA: "SET_LAUNCH_DATA",
};

// actions
const setLaunchFilter = filter => ({
    type: Types.SET_LAUNCH_FILTER,
    payload: filter
});

const setLaunchData = data => ({
    type: Types.SET_LAUNCH_DATA,
    payload: data
});


const ACTIONS = {
    Types,
    setLaunchFilter,
    setLaunchData,
};

export default ACTIONS;
