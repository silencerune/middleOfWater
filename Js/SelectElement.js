
app.directive("selectElement", () => {
    return {
        // restrict: "A",
        restrict: "E",
        scope: { name: '=' },
        templateUrl: "html/SelectElement.html",
        controller: "selectElementController",
        link: (scope, element, attrs) => { },
    };

});
app.controller("selectElementController", ($rootScope, $scope, selectShareDate) => {
    $scope.story = ['竊凝語', '屏幕那端', '短篇集']
    $scope.nowSelect = "Middle";
    $scope.select = {
        title: ['North', 'West', 'South', 'East', 'Police', 'Glossary'],
    }
    $rootScope.showNoti = true;

    $scope.slectplace = (place) => {
        $scope.nowSelect = "Middle";
        selectShareDate.selectPlace(place);
        $scope.$broadcast('changeElement');
    }


});