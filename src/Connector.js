exports.unsafeReplaceConnector = function unsafeReplaceConnector(regex, bsReplaceFunction, str) {
  /*
    function f takes the arguments that the replace function gets from JavaScript
    and puts them into a form that looks like what the Reason function
    expects
  */
  let jsReplaceFunction = function f(matchpart, ...remainder) {
    var otherArgs = remainder.slice(0, remainder.length - 2);
    var offset = remainder[remainder.length - 2];
    var wholeString = remainder[remainder.length - 1];
    return bsReplaceFunction(matchpart, otherArgs, offset, wholeString);
  }
  
  return str.replace(regex, jsReplaceFunction);
}

