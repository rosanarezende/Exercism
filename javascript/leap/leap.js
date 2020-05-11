//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (X) => {
  return (X % 4 === 0) && (X % 100 !== 0) || (X % 400 === 0)
};
