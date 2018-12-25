"use strict";

var WPJSHelp = function WPJSHelp() {
  var _body = document.querySelector('body');

  var isHome = function isHome() {
    return _body;
  };

  return {
    isHome: isHome
  };
};

var _WPHelp = WPJSHelp();