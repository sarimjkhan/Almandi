// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers','starter.services','ngCordova'])

.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    //db = $cordovaSQLite.openDB("my.db");
  });
})
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider){
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.views.maxCache(0);
  
  $stateProvider
  .state('splash', {
    url: "/",
    templateUrl: 'templates/splash.html',
    controller: 'SplashCtrl'
  })
  .state('products', {
    url: '/products',
    templateUrl: 'templates/products.html',
    controller: 'ProductsCtrl'
  })
  .state('cart',{
    url: "/cart",
    templateUrl: 'templates/cart.html',
    controller: 'CartCtrl'
  })
  .state('myaddress',{
    url: "/myaddress",
    templateUrl: 'templates/myaddress.html'
  })
  .state('survey',{
    url: "/survey",
    templateUrl: 'templates/survey.html',
    controller: 'SurveyCtrl'
  })
  .state('about',{
    url: "/about",
    templateUrl: 'templates/about.html',
    controller: 'AboutCtrl'
  })
  .state('contactus',{
    url: "/contactus",
    templateUrl: 'templates/contactus.html',
    controller: 'ContactUsCtrl'
  });

  // set the default route
  $urlRouterProvider.otherwise('/');
})
