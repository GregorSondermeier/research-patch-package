/**
 * Will return message with passed in parameter.
 * @param {string} [name="You"]
 */
export const setMessage = (name = 'You'): string => {
  return `Hello World and ${name}!`;
};
