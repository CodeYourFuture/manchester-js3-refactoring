/* 
  this is a possible simplification of the previous function.

  * removed the 'if condition return true, else return false' pattern, which can be simplified to simply 'if condition'
  * moved the condition check to the function itself, removing an unnecessary helper (which was badly named! it was returning true if the value was *not* undefined)
  * converted to es6 syntax to allow for more concise expression
  * renamed the function to be slightly more telling in what it does (I'm sure you can do better)
  * ensure that the functionality is the same. Why can't we can't use value => value || '' instead?

*/

const emptyStringIfUndefined = value => (value === undefined ? "" : value);

module.exports = emptyStringIfUndefined;
