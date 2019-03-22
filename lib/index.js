'use strict';

/**
 * @license MIT
 * TestId Loader
 * @author Rasmus Josefsson <rajjejosfssson@gmail.com> (@rajjejosefsson)
 */
module.exports = function loader(content) {
  this.cacheable && this.cacheable();
  content = content.replace(/data-test-?id={.*}/gi, '');
  content = content.replace(/data-test-?id=".*"/gi, '');
  return content;
};
