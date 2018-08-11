app.factory('selectShareDate', (
    northCharatureDetail, southCharatureDetail, eastCharatureDetail, westCharatureDetail,
    policeCharatureDetail, glossaryDetail, storyDetail
) => {

    let place = localStorage.getItem("selectplace") ? localStorage.getItem("selectplace") : 'Story';
    let spreatePlane = false;
    let refference = 0;
    const placechar = {
        'Taipei City': northCharatureDetail.north,
        'New Taipei City': northCharatureDetail.north,
        'Keelung City': northCharatureDetail.Keelung,
        'Hsinchu': northCharatureDetail.Hsinchu,
        'Hsinchu City': northCharatureDetail.Hsinchu,
        /*=========================================*/

        'Chiayi': southCharatureDetail.Chiayi,
        'Chiayi City': southCharatureDetail.ChiayiCity,
        'Tainan City': southCharatureDetail.Tainan,
        'Pingtung': southCharatureDetail.Pingtung,
        /*=========================================*/
        'Taitung': eastCharatureDetail.Taitung,
        /*=========================================*/
        'Nantou': westCharatureDetail.Nantou,
        /*=========================================*/
        'Other': policeCharatureDetail,

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
