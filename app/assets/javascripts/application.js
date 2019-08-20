// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.validate
//= require twitter/bootstrap
//= require i18n
//= require i18n.js
//= require i18n/translations
//= require js-routes
//= require axios
//= require iao-alert.jquery
//= require underscore
//= require moment.min
//= require bootstrap-datepicker
//= require select2.full.min

// NOTES: Follow https://babeljs.io/docs/usage/polyfill/, we need to require babel-polyfill at the top of the entry point to your application. This is hot fix for IE11 support and using es6 in project
//= require_self
//= require js_constant
//= require_tree ./configs
//= require common
// NOTES: hot fix for IE 11 and es6 support.
