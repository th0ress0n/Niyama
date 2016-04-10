angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  console.log("AppCtrl");
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  $scope.$on('$ionicView.enter', function(e) {
    console.log("$ionicView.enter");
  });

  // Form data for the login modal
  // $scope.loginData = {};

  // Create the login modal that we will use later
  // $ionicModal.fromTemplateUrl('templates/login.html', {
  //   scope: $scope
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });

  // Triggered in the login modal to close it
  // $scope.closeLogin = function() {
  //   $scope.modal.hide();
  // };

  // Open the login modal
  // $scope.login = function() {
  //   $scope.modal.show();
  // };

  // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);

  //   // Simulate a login delay. Remove this and replace with your login
  //   // code if using a login system
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };

})

// ########  HomeCtrl  ############################# //
.controller('HomeCtrl', function($scope, $http) {
  console.log("HomeCtrl");

  $scope.data = {};


  var postUsers = $http.get('http://www.niyamanaturopathic.com.au/wp-json/wp/v2/posts?type=post&tags=33')
  postUsers.then(function(result) {
       $scope.data = result.data;
       for (var i = $scope.data.length - 1; i >= 0; i--) {
         console.log("slug : "+$scope.data[i].featured_media)

         var getMedia = $http.get('http://www.niyamanaturopathic.com.au/wp-json/wp/v2/media/'+$scope.data[i].featured_media)
         getMedia.then(function(media) {
            console.log("img : "+media.data.source_url)
         });

       }
  });


})

// ########  AboutCtrl  ############################# //
.controller('AboutCtrl', function($scope) {
  console.log("AboutCtrl");
})

// ########  ConsultationsCtrl  ############################# //
.controller('ConsultationsCtrl', function($scope) {
  console.log("ConsultationsCtrl");
})

// ########  BreakfastCtrl  ############################# //
.controller('BreakfastCtrl', function($scope) {
  console.log("BreakfastCtrl");
})

// ########  DairyfreeCtrl  ############################# //
.controller('DairyfreeCtrl', function($scope) {
  console.log("DairyfreeCtrl");
})

// ########  DrinksCtrl  ############################# //
.controller('DrinksCtrl', function($scope) {
  console.log("DrinksCtrl");
})

// ########  GlutenfreeCtrl  ############################# //
.controller('GlutenfreeCtrl', function($scope) {
  console.log("GlutenfreeCtrl");
})

// ########  KidsCtrl  ############################# //
.controller('KidsCtrl', function($scope) {
  console.log("KidsCtrl");
})

// ########  MainsCtrl  ############################# //
.controller('MainsCtrl', function($scope) {
  console.log("MainsCtrl");
})

// ########  SnacksCtrl  ############################# //
.controller('SnacksCtrl', function($scope) {
  console.log("SnacksCtrl");
})

// ########  StaplesCtrl  ############################# //
.controller('StaplesCtrl', function($scope) {
  console.log("StaplesCtrl");
})

// ########  VeganCtrl  ############################# //
.controller('VeganCtrl', function($scope) {
  console.log("VeganCtrl");
})

// ########  ChildrenshealthCtrl  ############################# //
.controller('ChildrenshealthCtrl', function($scope) {
  console.log("ChildrenshealthCtrl");
})

// ########  HealthylivingCtrl  ############################# //
.controller('HealthylivingCtrl', function($scope) {
  console.log("HealthylivingCtrl");
})

// ########  HerbalmedicineCtrl  ############################# //
.controller('HerbalmedicineCtrl', function($scope) {
  console.log("HerbalmedicineCtrl");
})

// ########  NaturalbeautyCtrl  ############################# //
.controller('NaturalbeautyCtrl', function($scope) {
  console.log("NaturalbeautyCtrl");
})

// ########  NaturopathyCtrl  ############################# //
.controller('NaturopathyCtrl', function($scope) {
  console.log("NaturopathyCtrl");
})

// ########  NutritionCtrl  ############################# //
.controller('NutritionCtrl', function($scope) {
  console.log("NutritionCtrl");
})

// ########  ArticleDetailCtrl  ############################# //
.controller('ArticleDetailCtrl', function($scope) {
  console.log("ArticleDetailCtrl");
})

// ########  RecipeDetailCtrl  ############################# //
.controller('RecipeDetailCtrl', function($scope) {
  console.log("RecipeDetailCtrl");
})
