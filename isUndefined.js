// helper function: helps with undefined values

function isUndefined(value) {

  return isUndefinedHelper(value) ? value : '';
}


function isUndefinedHelper (value) {
  if (value !== undefined) {
    return true
  } else {
    return false
  }

}



// make the function available to be used somewhere else
module.exports = isUndefined;


/*
  This function is quite messy, why don't we refactor it!? (=== improve it to be better, more understandable)
  before you do that, you will want to actually ensure that you're not breaking functionality. Tests!

  * you'll need to install jest. there is no package.json at the moment
  * start creating the files and writing assertion that capture the functionaly of the code (up to you to find it)
  * once done, you can start changing the function in successive steps, running test every change you make to ensure
  that everything is correct

*/