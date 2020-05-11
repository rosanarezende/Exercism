//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = X => {
  let rna = "";

  for(let i = 0; i < X.length; i++) {
    if (X[i] === "C") {
      rna += X[i].replace("C", "G")
    } else if (X[i] === "G") {
      rna += X[i].replace("G", "C")
    } else if (X[i] === "T") {
      rna += X[i].replace("T", "A")
    } else if (X[i] === "A") {
      rna += X[i].replace("A", "U")
    }
  }

  return rna;
  
};
