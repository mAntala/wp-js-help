"use strict";

var WPJSHelp = function WPJSHelp() {
  // PRIVATE VARIABLES
  var _body = document.body; // PRIVATE FUNCTIONS

  var hasBodyClass = function hasBodyClass(className) {
    if (className) {
      return _body.classList.contains(className);
    }

    return;
  };


  var isHome = function isHome() {
    return hasBodyClass('home');
  };

  return {
    isHome: isHome
  };
};

var _WPHelp = WPJSHelp();
