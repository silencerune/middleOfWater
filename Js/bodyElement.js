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
app.controller("bodyElementController", ($rootScope, $scope, selectShareDate, northCharatureDetail) => {
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
        // $scope.sparte = true;

    });


    $scope.doClose = () => {
        $scope.sparte = false;
    }
    $scope.reference = [
        // {
        //     title: '神約',
        //     discrip: '大多由神持有，以往神話戰爭中，神方搶奪的目標，持有者能佔有整個地方的信仰，沒有固定形體'

        // },
        // {
        //     title: '災契',
        //     discrip: '大多由災禍持有，以往神話戰爭中，災禍方搶奪的目標，持有者能佔有整個地方的信仰，沒有固定形體'
        // },
        // {
        //     title: '年獸',
        //     discrip: '傳說中年節會出來吃人的怪物，平衡著人口，然而在神氾濫時，出現了以神為糧的噬神種，平衡神的數量。'
        // },
        // {
        //     title: '噬神種',
        //     discrip: '以神為糧的年，分成噬神和擺盪兩種，前者只以神為糧，後者則在人口數量多時，眼眸會轉紅，以人為糧。'
        // }
    ]

});