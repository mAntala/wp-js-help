"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * WP JS HELP is a small library for making your life with WordPress easier.
 * Have you ever wanted to use similar WP function but on front-end? Well...
 * Here we are.
 * @description WordPress PHP functions made in JavaScript to be used on front-end.
 * @author Maroš Antala
 * @version 0.0.1
 * @github https://github.com/mAntala/wp-js-help
 * @license MIT
 *
 * Copyright (c) 2018 Maroš Antala
 *
 */
var WPJSHelp = function WPJSHelp() {
  // PRIVATE VARIABLES
  var _body = document.body; // PRIVATE FUNCTIONS

  /**
   * Checks if body has class provided as parameter.
   * @param  {String}  className Class name to check if <body> contains.
   * @return {Boolean}
   */

  var hasBodyClass = function hasBodyClass(className) {
    if (className) {
      return _body.classList.contains(className);
    }

    return;
  };
  /**
   * I dunno why I made this function. Whatever.
   * It will make Array from NODE list, for example.
   * @param  {Node List} list Any list of items, that is NOT Array.
   * @return {Array}          Returns array.
   */


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
  /**
   * Get category name.
   * @return {String} Category's name.
   */


  var getCategoryName = function getCategoryName() {
    if (isCategory()) {
      var _bodyClassList = makeArrayFrom(_body.classList);

      for (var i in _bodyClassList) {
        var item = _bodyClassList[i];

        if (item.match(/(?:category)-\w+/g)) {
          return {
            categoryName: item.split('-')[1].toLowerCase()
          };
        }
      }
    }

    return;
  };
  /**
   * Check, if function exists. Based on typeof.
   * If function exists and is function, return true.
   * If function/variable/etc... is undefined, console throw error.
   * If as argument is passed variable, object or array, return false.
   * @param  {function} functionName Name of function.
   * @return {Boolean}
   */


  var functionExists = function functionExists(functionName) {
    if (functionName) {
      var type = _typeof(functionName);

      if (type !== 'function') {
        return false;
      } else {
        return true;
      }
    }

    return;
  };
  /**
   * Removes all HTML tags including <script> and <style>
   * @param  {String} string HTML string
   * @return {String}        Returns string without HTML tags
   * @credits Petrović Stefan
   * @website https://petrovicstefan.rs/
   */


  var stripAllTags = function stripAllTags(string) {
    return string.replace(/<[^>]*>/g, '');
  };
  /**
   * Returns full article URL.
   * @return {String} Full URL with protocol, domain and full path.
   * Does not return query.
   */


  var getPermalink = function getPermalink() {
    return isArticle() ? window.location.origin + window.location.pathname : null;
  };
  /**
   * Returns article's excerpt without whitespace and invisible tags,
   * like Enters, etc...
   * @param  {String} [excerptElement='.the-excerpt'] Class of elements where is excerpt.
   * @return {String}                                 Article's excerpt.
   */


  var getTheExcerpt = function getTheExcerpt() {
    var excerptElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.the-excerpt';

    if (isArticle()) {
      var excerptText = document.querySelector(excerptElement).innerText;
      return excerptText.trim().replace(/[\x00-\x1F\x7F-\x9F]/g, '');
    }

    return null;
  };
  /**
   * Returns article's title.
   * @param  {String} titleElement Class or ID of title's element.
   * @return {String}              Article's title.
   */


  var getPostTitle = function getPostTitle(titleElement) {
    if (typeof titleElement !== 'undefined' && isArticle()) {
      var titleText = document.querySelector(titleElement).innerText;
      return titleText.trim();
    }

    return null;
  };

  return {
    isHome: isHome,
    isCategory: isCategory,
    isArticle: isArticle,
    isSearch: isSearch,
    getArticleID: getArticleID,
    getCategoryID: getCategoryID,
    getCategoryName: getCategoryName,
    functionExists: functionExists,
    stripAllTags: stripAllTags,
    getPermalink: getPermalink,
    getTheExcerpt: getTheExcerpt,
    getPostTitle: getPostTitle
  };
};

var _WPHelp = WPJSHelp();