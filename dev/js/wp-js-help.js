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

  return {
    isHome,
    isCategory,
    isArticle,
    isSearch
  };

});

const _WPHelp = WPJSHelp();
