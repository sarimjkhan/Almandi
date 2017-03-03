angular.module('starter.controllers', [])
.controller('AppCtrl', function($scope){

})
.controller('SplashCtrl', function($scope,LoginService, $ionicPopup, $state, $ionicLoading){
    setTimeout(function(){
        $state.go('products');
    },3000);
})
.controller('ProductsCtrl',function($scope, $ionicPopup,$ionicSlideBoxDelegate, $state, $cordovaSQLite, LoginService, DBService, CategoriesService){
    //Somehow the left menu button is hiding , after splash screen
    setTimeout(function(){
        document.getElementById("leftMenuBtnId").classList.remove("hide");
    }, 1000);

    $scope.categories = [];
    $scope.categories = CategoriesService.getCategoriesAndProducts();

    $scope.showPopup = function(){
        $ionicPopup.show({
            templateUrl: "templates/product.html",
            scope: $scope,
            buttons: [
            { text: 'Back' }
         ]
        });
    }
})
.controller('CartCtrl', function($scope, $ionicPopup, $state, CartService, DBService){
    $scope.cartProducts = [];
    $scope.cartProducts = CartService.getAddedProducts();

    $scope.handleScheduleClick = function(){
        let alertPopup = $ionicPopup.alert({
            title: 'Schedule',
            template: 'Scheduled'
        });
    };

    $scope.handleOrderNowClick = function(){
        let alertPopup = $ionicPopup.alert({
            title: 'Order Now',
            template: 'Ordered'
        });
    };

})
.controller('SurveyCtrl', function($scope, $ionicPopup, $state, LoginService){

})
.controller('AboutCtrl',function($scope){
    //Just passing $ionicConfigProvider is setting the tab position at bottom
    //$ionicConfigProvider.tabs.position('bottom');
})
.controller('ContactUsCtrl', function($rootScope, $scope, $state, LoginService){
});