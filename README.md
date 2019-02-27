# wp-js-help
Simple JavaScript library. Making your life with WordPress easier.

## Usage
Simply enqueue ```/dist/js/wp-js-help.min.js``` to your WordPress theme and try it out in console.

First, try ```_WPHelp```, then try what you want:

* ```getArticleID``` for getting article's ID.
* ```getCategoryID``` for getting category's ID.
* ```getCategoryName``` for getting category's name from body class.
* ```isArticle``` to check, if page is article.
* ```isHome``` to check, if page is homepage.
* ```isCategory``` to check, if page is category / archive.
* ```isSearch``` to check, if page is search results page.
* ```functionExists``` to check, if certain function exists.
* ```stripAllTags``` to remove all HTML tags from string (<script> & <style> included).
* ```getPermalink``` to get full permalink of article.
