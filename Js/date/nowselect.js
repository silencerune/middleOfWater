app.factory('selectShareDate', (
    northCharatureDetail, southCharatureDetail, eastCharatureDetail, westCharatureDetail
) => {
    let place = 'North';
    let spreatePlane = false;
    let refference = 0;
    const placechar = {
        'North': northCharatureDetail,
        'South': southCharatureDetail,
        'East': eastCharatureDetail,
        'West': westCharatureDetail
    }
    return {
        selectPlace: selectPlace,
        getPlance: getPlance,
        setRefference: setRefference,
        getRefference: getRefference,

    };
    function setRefference(k) {
        refference = k;
    }
    function getRefference() {
        return refference;
    }
    function selectPlace(from) {
        place = from;
        console.info(place);
    }
    function getPlance() {

        return placechar[place];
    }
});
