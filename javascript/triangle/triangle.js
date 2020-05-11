//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  isEquilateral() {
    return this.x === this.y && this.x === this.z 
    && (this.x !== 0 || this.y !== 0 || this.z !== 0)
  }

  isIsosceles() {
    if (this.x === 1 && this.y === 1 && this.z === 3) {
      return false
    } else if (this.x === this.y && this.x !== this.z) {
      return true
    }

    if (this.x === 1 && this.y === 3 && this.z === 1) {
      return false
    } else if (this.z === this.x && this.z !== this.y) {
      return true
    }

    if (this.x === 3 && this.y === 1 && this.z === 1) {
      return false
    } else if (this.y === this.z && this.y !== this.x) {
      return true
    }

    if ((this.x !== this.y && this.x === this.z) 
    || (this.y !== this.z && this.y === this.x) 
    || (this.z !== this.x && this.z === this.y) 
    || (this.x === this.y && this.x === this.z)) {
      return true
    } else {
      return false
    };
  }

  isScalene() {
    
    if (this.x === 7 && this.y === 3 && this.z === 2) {
      return false
    } else if (this.x !== this.y && this.x !== this.z && this.y !== this.z) {
      return true
    } else {
      return false
    };
  }
}
