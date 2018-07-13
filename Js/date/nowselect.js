app.factory('selectShareDate', (
    northCharatureDetail, southCharatureDetail, eastCharatureDetail, westCharatureDetail,
    policeCharatureDetail, glossaryDetail, storyDetail
) => {
    let place = localStorage.getItem("selectplace") ? localStorage.getItem("selectplace") : 'Story';
    let spreatePlane = false;
    let refference = 0;
    const placechar = {
        'North': northCharatureDetail,
        'South': southCharatureDetail,
        'East': eastCharatureDetail,
        'West': westCharatureDetail,
        'Police': policeCharatureDetail,
        'Glossary': glossaryDetail,
        'Story': storyDetail
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
        localStorage.setItem("selectplace", place);
        // console.info(place);
    }
    function getPlance() {

        return placechar[place];
    }
});
