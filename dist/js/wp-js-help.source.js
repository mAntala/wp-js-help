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

  var makeArrayFrom = function makeArrayFrom(list) {
    return Array.from(list);
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
  /**
   * Get post ID.
   * @return {Object} Post's ID.
   */


  var getArticleID = function getArticleID() {
    if (isArticle()) {
      var _bodyClassList = makeArrayFrom(_body.classList);

      for (var i in _bodyClassList) {
        var item = _bodyClassList[i];

        if (item.match(/postid/g)) {
          return {
            postId: parseInt(item.match(/\d/g).join(''), 10)
          };
        }
      }
    }

    return;
  };
  /**
   * Get category ID.
   * @return {Object} Category's ID.
   */


  var getCategoryID = function getCategoryID() {
    if (isCategory()) {
      var _bodyClassList = makeArrayFrom(_body.classList);

      for (var i in _bodyClassList) {
        var item = _bodyClassList[i];

        if (item.match(/(?:category)-\d+/g)) {
          return {
            categoryId: parseInt(item.split('-')[1], 10)
          };
        }
      }
    }

    return;
  };

  return {
    isHome: isHome,
    isCategory: isCategory,
    isArticle: isArticle,
    isSearch: isSearch,
    getArticleID: getArticleID,
    getCategoryID: getCategoryID
  };
};

var _WPHelp = WPJSHelp();