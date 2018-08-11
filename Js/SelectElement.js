
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
        // title: ['North', 'West', 'South', 'East', 'Police', 'Glossary'],
        title: ['Other', 'Glossary'],
    }
    $rootScope.showNoti = true;
    $scope.$on('changeElement2', function (event) { $scope.$broadcast('changeElement'); });
    $scope.slectplace = (place) => {
        $scope.nowSelect = "Middle";
        // console.log(place);
        selectShareDate.selectPlace(place);
        $scope.$broadcast('changeElement');
    }

});