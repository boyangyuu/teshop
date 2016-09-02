'use strict';
(function() {
angular.module('shopnxApp')
.constant('Settings', {
  // userRoles:['guest','user','admin'],
  demo: true,
  menu: {
    pages : [
      {text:'Books', icon: 'book', url: 'book', authenticate: true},
      {text:'Movies', icon: 'movie', url: 'movie', authenticate: true},
      {text:'Contacts', icon: 'contacts', url: 'contact', authenticate: true},
      {text:'Customers', icon: 'people', url: 'customer', authenticate: true},
      {text:'Tasks', icon: 'assignment', url: 'task', authenticate: true},
      {text:'Documentation', icon: 'description', url: 'documentation'}
    ],
    auth : [
      {text:'login', icon: 'login', url: 'login'},
      {text:'signup', icon: 'login', url: 'signup'}
    ],
    admin : [
      {text:'Change Password', icon: 'settings', url: 'settings'},
      {text:'logout', icon: 'logout', url: 'logout'}
    ]
  }
});
})();
