export const splitArr = (arr) => {
    const result = [[],[],[],[]];

    const itemsPerArray = Math.ceil(arr.length / 4)

    for (let line = 0; line < 4; line++) {
        for (let i = 0; i < itemsPerArray; i++) {
            const value = arr[i + line * itemsPerArray]
            if (!value) continue //avoid adding "undefined" values
            result[line].push(value)
        }
    }
    return result;
}

export const getSearchString = ({ launchYear, hasSuccessfullyLaunched, hasSuccessfullyLanded }) => {
    let searchString = '';
    if (launchYear) searchString += `&launch_year=${launchYear}`
    if (typeof hasSuccessfullyLaunched === 'boolean') {
        searchString += `&launch_success=${hasSuccessfullyLaunched}`
    }
    if (typeof hasSuccessfullyLanded === 'boolean') {
        searchString += `&land_success=${hasSuccessfullyLanded}`
    }
    return searchString;
}
