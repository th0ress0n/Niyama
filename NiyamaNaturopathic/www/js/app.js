// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl'
      }
    }
  })
  .state('app.consultations', {
    url: '/consultations',
    views: {
      'menuContent': {
        templateUrl: 'templates/consultations.html',
        controller: 'ConsultationsCtrl'
      }
    }
  })
  // -- Recipes Controllers -- //
  .state('app.breakfast', {
    url: '/breakfast',
    views: {
      'menuContent': {
        templateUrl: 'templates/breakfast.html',
        controller: 'BreakfastCtrl'
      }
    }
  })
  .state('app.dairyfree', {
    url: '/dairyfree',
    views: {
      'menuContent': {
        templateUrl: 'templates/dairyfree.html',
        controller: 'DairyfreeCtrl'
      }
    }
  })
  .state('app.drinks', {
    url: '/drinks',
    views: {
      'menuContent': {
        templateUrl: 'templates/drinks.html',
        controller: 'DrinksCtrl'
      }
    }
  })
  .state('app.glutenfree', {
    url: '/glutenfree',
    views: {
      'menuContent': {
        templateUrl: 'templates/glutenfree.html',
        controller: 'GlutenfreeCtrl'
      }
    }
  })
  .state('app.kids', {
    url: '/kids',
    views: {
      'menuContent': {
        templateUrl: 'templates/kids.html',
        controller: 'KidsCtrl'
      }
    }
  })
  .state('app.mains', {
    url: '/mains',
    views: {
      'menuContent': {
        templateUrl: 'templates/mains.html',
        controller: 'MainsCtrl'
      }
    }
  })
  .state('app.snacks', {
    url: '/snacks',
    views: {
      'menuContent': {
        templateUrl: 'templates/snacks.html',
        controller: 'SnacksCtrl'
      }
    }
  })
  .state('app.staples', {
    url: '/staples',
    views: {
      'menuContent': {
        templateUrl: 'templates/staples.html',
        controller: 'StaplesCtrl'
      }
    }
  })
  .state('app.vegan', {
    url: '/vegan',
    views: {
      'menuContent': {
        templateUrl: 'templates/vegan.html',
        controller: 'VeganCtrl'
      }
    }
  })
  // -- Content Controllers -- //
  .state('app.childrenshealth', {
    url: '/childrenshealth',
    views: {
      'menuContent': {
        templateUrl: 'templates/childrenshealth.html',
        controller: 'ChildrenshealthCtrl'
      }
    }
  })
  .state('app.healthyliving', {
    url: '/healthyliving',
    views: {
      'menuContent': {
        templateUrl: 'templates/healthyliving.html',
        controller: 'HealthylivingCtrl'
      }
    }
  })
  .state('app.herbalmedicine', {
    url: '/herbalmedicine',
    views: {
      'menuContent': {
        templateUrl: 'templates/herbalmedicine.html',
        controller: 'HerbalmedicineCtrl'
      }
    }
  })
  .state('app.naturalbeauty', {
    url: '/naturalbeauty',
    views: {
      'menuContent': {
        templateUrl: 'templates/naturalbeauty.html',
        controller: 'NaturalbeautyCtrl'
      }
    }
  })
  .state('app.naturopathy', {
    url: '/naturopathy',
    views: {
      'menuContent': {
        templateUrl: 'templates/naturopathy.html',
        controller: 'NaturopathyCtrl'
      }
    }
  })
  .state('app.nutrition', {
    url: '/nutrition',
    views: {
      'menuContent': {
        templateUrl: 'templates/nutrition.html',
        controller: 'NutritionCtrl'
      }
    }
  })
  // ---------------------- //
  .state('app.article', {
    url: '/article/:articleId',
    views: {
      'menuContent': {
        templateUrl: 'templates/articledetail.html',
        controller: 'ArticleDetailCtrl'
      }
    }
  })
  .state('app.recipe', {
    url: '/recipe/:recipeId',
    views: {
      'menuContent': {
        templateUrl: 'templates/recipedetail.html',
        controller: 'RecipeDetailCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/consultations');
});
