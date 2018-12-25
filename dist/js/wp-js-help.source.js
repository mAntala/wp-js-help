"use strict";

var WPJSHelp = function WPJSHelp() {
  // PRIVATE VARIABLES
  var _body = document.body; // PRIVATE FUNCTIONS

  var hasBodyClass = function hasBodyClass(className) {
    if (className) {
      return _body.classList.contains(className);
    }

    return;
  }; // PUBLIC FUNCTIONS

  /**
   * Check, if actual page is HOMEPAGE.
   * @return {Boolean}
   */


  var isHome = function isHome() {
    return hasBodyClass('home');
  };
  /**
   * Check, if actual page is CATEGORY / ARCHIVE.
   * @return {Boolean}
   */


  var isCategory = function isCategory() {
    return hasBodyClass('category') || hasBodyClass('archive');
  };
  /**
   * Check, if actual page is ARTICLE.
   * @return {Boolean} [description]
   */


  var isArticle = function isArticle() {
    return hasBodyClass('single') || hasBodyClass('single-post');
  };
  /**
   * Check, if actual page is SEARCH.
   * I mean page with search result. Just make it clear.
   * @return {Boolean}
   */


  var isSearch = function isSearch() {
    return hasBodyClass('search') || hasBodyClass('search-results');
  };

  return {
    isHome: isHome,
    isCategory: isCategory,
    isArticle: isArticle,
    isSearch: isSearch
  };
};

var _WPHelp = WPJSHelp();