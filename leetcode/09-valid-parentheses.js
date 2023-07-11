/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s.length % 2 !== 0) return false;
let result = s; 
  const bracketsConfig = ['()', '{}', '[]'];

  for( let i = 0; i < s.length / 2; i++ ) {
      bracketsConfig.forEach((brackets) => {
        result = result.replace(brackets, '');
      })
     
  }
  return result.length === 0;
};

isValid("()[]{}")