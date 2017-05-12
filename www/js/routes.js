angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/Home.html',
        controller: 'HomePageCtrl'
      }
    }
  })

  .state('tabsController.Splash', {
    url: '/SplashScreen',
    views: {
      'tab1': {
        templateUrl: 'templates/SplashScreen.html',
        controller: 'SplashPageCtrl'
      }
    }
  })


  .state('tabsController.detail', {
    url: "/details/:val_index",
    views: {
      'tab1': {
        templateUrl: "templates/detail.html",
        controller: 'detailCtrl'
      }
    }
  })

  .state('tabsController.about', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/About.html',
        controller: 'aboutPageCtrl'
      }
    }
  })

  .state('tabsController.services', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/Services.html',
        controller: 'servicesPageCtrl'
      }
    }
  })

  .state('tabsController.Contact', {
    url: "/Contact",
    views: {
      'tab3': {
        templateUrl: "templates/ContactUs.html",
        controller: 'ContactCtrl'
      }
    }
  })

  .state('tabsController.Feedback', {
    url: "/Feedback",
    views: {
      'tab3': {
        templateUrl: "templates/Feedback.html",
        controller: 'FeedbackCtrl'
      }
    }
  })



  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  $urlRouterProvider.otherwise('/page1/page2')
 //$urlRouterProvider.otherwise('tabsController.Splash')



});