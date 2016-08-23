'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['$http', //This is a list of all of the dependencies to inject. We do this to prevent problems
                          // during minification
      function PhoneListController($http) {
        var self = this;
        self.orderProp = 'age';

        $http.get('phones/phones.json').then(function(response) {
          //self.phones = response.data;
          self.phones = response.data.slice(0,5);
        });
      }
    ]
  });