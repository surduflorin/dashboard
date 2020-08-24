"use strict";

module.exports = [{
  key: 'dashboard',
  name: 'Dashboard',
  icon: 'ios-home-outline',
  linkParent: '/app/dashboard'
}, {
  key: 'auth',
  name: 'User',
  icon: 'ios-contact-outline',
  child: [{
    key: 'form',
    name: 'Details',
    link: '/app/form',
    icon: 'ios-list-box-outline'
  }, {
    key: 'login',
    name: 'Login',
    link: '/login',
    icon: 'ios-person-outline'
  }, {
    key: 'register',
    name: 'Register',
    link: '/register',
    icon: 'ios-key-outline'
  }, {
    key: 'reset',
    name: 'Reset Password',
    link: '/reset-password',
    icon: 'ios-undo-outline'
  }]
}];