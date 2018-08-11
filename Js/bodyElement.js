app.directive("bodyElement", () => {
    return {
        // restrict: "A",
        restrict: "E",
        scope: { name: '=' },
        templateUrl: "html/BodyElement.html",
        controller: "bodyElementController",
        link: (scope, element, attrs) => { },
    };
});
app.controller("bodyElementController", ($rootScope, $scope, selectShareDate) => {
    $scope.sparte = false;

    $scope.referindex = 0
    $scope.north = selectShareDate.getPlance();

    $scope.dospart = (k) => {
        $scope.sparte = true;
        console.info('1');
        $scope.referindex = k ? k : 0
        selectShareDate.setRefference(k);
        $scope.$broadcast('ShowDialog');
    }


    $scope.$on('changeElement', function (event) {
        $scope.sparte = false;
        console.info('2');


        $scope.referindex = selectShareDate.getRefference();
        $scope.north = selectShareDate.getPlance();
        fortest();
    });
    function fortest() {
        $scope.north = selectShareDate.getPlance();
    }


    $scope.doClose = () => {
        $scope.sparte = false;
    }


});