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
const WPJSHelp = (function() {

  // PRIVATE VARIABLES
  const _body = document.body;

  // PRIVATE FUNCTIONS
  /**
   * Checks if body has class provided as parameter.
   * @param  {String}  className Class name to check if <body> contains.
   * @return {Boolean}
   */
  const hasBodyClass = (className) => {
    if(className) {
      return _body.classList.contains(className);
    }

    return;
  }

  /**
   * I dunno why I made this function. Whatever.
   * It will make Array from NODE list, for example.
   * @param  {Node List} list Any list of items, that is NOT Array.
   * @return {Array}          Returns array.
   */
  const makeArrayFrom = (list) => {
    return Array.from(list);
  }

  // PUBLIC FUNCTIONS
  /**
   * Check, if actual page is HOMEPAGE.
   * @return {Boolean}
   */
  const isHome = () => {
    return hasBodyClass('home');
  }
  /**
   * Check, if actual page is CATEGORY / ARCHIVE.
   * @return {Boolean}
   */
  const isCategory = () => {
    return hasBodyClass('category') || hasBodyClass('archive');
  }
  /**
   * Check, if actual page is ARTICLE.
   * @return {Boolean} [description]
   */
  const isArticle = () => {
    return hasBodyClass('single') || hasBodyClass('single-post');
  }
  /**
   * Check, if actual page is SEARCH.
   * I mean page with search result. Just make it clear.
   * @return {Boolean}
   */
  const isSearch = () => {
    return hasBodyClass('search') || hasBodyClass('search-results');
  }
  /**
   * Get post ID.
   * @return {Object} Post's ID.
   */
  const getArticleID = () => {
    if(isArticle()) {
      const _bodyClassList = makeArrayFrom(_body.classList);
      for(var i in _bodyClassList) {
        let item = _bodyClassList[i];
        if(item.match(/postid/g)) {
          return {
            postId: parseInt(item.match(/\d/g).join(''), 10)
          }
        }
      }
    }

    return;
  }
  /**
   * Get category ID.
   * @return {Object} Category's ID.
   */
  const getCategoryID = () => {
    if(isCategory()) {
      const _bodyClassList = makeArrayFrom(_body.classList);
      for(var i in _bodyClassList) {
        let item = _bodyClassList[i];
        if(item.match(/(?:category)-\d+/g)) {
          return {
            categoryId: parseInt(item.split('-')[1], 10)
          }
        }
      }
    }

    return;
  }
  /**
   * Get category name.
   * @return {String} Category's name.
   */
  const getCategoryName = () => {
    if(isCategory()) {
      const _bodyClassList = makeArrayFrom(_body.classList);
      for(var i in _bodyClassList) {
        let item = _bodyClassList[i];
        if(item.match(/(?:category)-\w+/g)) {
          return {
            categoryName: item.split('-')[1].toLowerCase()
          }
        }
      }
    }

    return;
  }

  /**
   * Check, if function exists. Based on typeof.
   * If function exists and is function, return true.
   * If function/variable/etc... is undefined, console throw error.
   * If as argument is passed variable, object or array, return false.
   * @param  {function} functionName Name of function.
   * @return {Boolean}
   */
  const functionExists = (functionName) => {
    if(functionName) {
      let type = typeof functionName;
      if(type !== 'function') {
        return false;
      }
      else {
        return true;
      }
    }
    return;
  }

  /**
   * Removes all HTML tags including <script> and <style>
   * @param  {String} string HTML string
   * @return {String}        Returns string without HTML tags
   * @credis Petrović Stefan
   * @website https://petrovicstefan.rs/
   */
  const stripAllTags = (string) => string.replace(/<[^>]*>/g, '');

  return {
    isHome,
    isCategory,
    isArticle,
    isSearch,
    getArticleID,
    getCategoryID,
    getCategoryName,
    functionExists,
    stripAllTags
  };

});

const _WPHelp = WPJSHelp();
