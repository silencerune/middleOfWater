app.directive("setMapElement", () => {
    return {
        restrict: "E",
        scope: { name: '=' },
        templateUrl: "html/setMapElement.html",
        controller: "setMapElementController",
        link: (scope, element, attrs) => { },
    };
});
app.controller("setMapElementController", ($rootScope, $scope, selectShareDate) => {
    $scope.select = '';
    var map = AmCharts.makeChart("mapdiv", {
        type: "map",

        zoomOnDoubleClick: true,
        zoomControlEnabled: false,
        balloon: {
            color: "#000000"
        },

        dataProvider: {
            map: "taiwanHigh",
            // zoomLevel: 0,
            // zoomLongitude: 0,
            // zoomLatitude: 52,
            borderColor: "#666666",
            getAreasFromMap: true,
        },

        areasSettings: {
            autoZoom: false,
            selectedColor: "#CC0000",
            selectable: true
        },

        // smallMap: {}
    });
    map.addListener("clickMapObject", function (event) {
        // document.getElementById("info").innerHTML = 'Clicked ID: ' + event.mapObject.id + ' (' + event.mapObject.title + ')';
        $scope.select = event.mapObject.title;
        // $scope.slectplace($scope.select);
        // $scope.slectplace(event.mapObject.title);
    });


    $scope.slectplace = (place) => {
        selectShareDate.selectPlace(place);
        $scope.$emit('changeElement2');
    }
})