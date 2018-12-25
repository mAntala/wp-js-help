const WPJSHelp = (function() {

  // PRIVATE VARIABLES
  const _body = document.body;

  // PRIVATE FUNCTIONS

  const hasBodyClass = (className) => {
    if(className) {
      return _body.classList.contains(className);
    }

    return;
  }

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

  return {
    isHome,
    isCategory,
    isArticle,
    isSearch,
    getArticleID,
    getCategoryID,
    getCategoryName
  };

});

const _WPHelp = WPJSHelp();
