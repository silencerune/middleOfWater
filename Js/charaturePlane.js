
app.directive("charatureElement", () => {
    return {
        // restrict: "A",
        restrict: "E",
        scope: { name: '=' },
        templateUrl: "html/charaturePlane.html",
        controller: "charaturePlaneController",

        link: (scope, element, attrs) => {
            // scope.doClose = () => {
            //     scope.sparte = false;
            // }
            // scope.doOpen = () => {
            //     scope.sparte = true;
            // }
        },
    };

});
app.controller("charaturePlaneController", ($scope, selectShareDate) => {
    $scope.sparte = false;
    $scope.referindex = 0;

    $scope.$on('ShowDialog', function (event) {
        console.info('3');
        $scope.sparte = true;
        $scope.north = selectShareDate.getPlance();
        $scope.referindex = selectShareDate.getRefference();


    });
    $scope.$on('changeElement', function (event) { $scope.doClose() });
    $scope.doClose = () => {
        console.info('4');
        $scope.sparte = false;
    }



    // $scope.sparte = selectShareDate.getOnoff()

});