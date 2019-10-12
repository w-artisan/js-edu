/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = 'family',
  knowsProgramming = true,
  config = { family: 4 }
) {
  let result = 0;
  const basic = 500;
  const master = 800;
  const setFocus = config[focus];

  if (knowsProgramming === true) {
    result = master / setFocus;
  } else {
    result = (master + basic) / setFocus;
  }
  return Math.ceil(result);
};
