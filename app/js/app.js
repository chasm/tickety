/*global angular */
/*jshint unused:false */

'use strict';

window.tickety = angular.module('ticketyTackety',
  [
    'firebase',
    'ticketyTackety.controllers',
    'ticketyTackety.services',
    'ngCookies'
  ]
);
