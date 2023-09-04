/**
 * Reverses the given string without use of javascript's built-in `.reverse()` function.
 *
 * @param str The string to reverse
 * @returns The given string reversed
 */
export const reverseString = (str: string): string => {
  let result = '';

  for (let idx = str.length - 1; idx >= 0; idx--) {
    result += str[idx];
  }

  return result;
};
