const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  typeof options.addition !== 'undefined'? addition = options.addition:  addition = '';

  repeatTimes = (options.repeatTimes || 1);
  additionRepeatTimes = (options.additionRepeatTimes || 1);
 
  separator = (options.separator || '+');
  additionSeparator = (options.additionSeparator || '|');

  additionString = ((addition + additionSeparator).repeat(additionRepeatTimes))

  result = (str + additionString.slice(0,additionString.lastIndexOf(additionSeparator)) + separator).repeat(repeatTimes);
  
  return result.slice(0,result.lastIndexOf(separator));
}

module.exports = {
  repeater
};
