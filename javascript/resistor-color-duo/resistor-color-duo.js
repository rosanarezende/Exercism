//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLOR = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

export const decodedValue = (X) => {
  return Number(COLOR.indexOf(X[0]).toString() + COLOR.indexOf(X[1]).toString())
};


