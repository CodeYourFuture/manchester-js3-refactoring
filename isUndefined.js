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