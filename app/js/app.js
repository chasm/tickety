/*global angular */
/*jshint unused:false */

'use strict';

window.tickety = angular.module('TicketyTackety',
  [
    'firebase',
    'TicketyTackety.controllers',
    'TicketyTackety.services',
    'ngCookies'
  ]
);
