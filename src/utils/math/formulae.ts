const InverseTransformMethod = (value: string | number) => {
  try {

    const number = Number(value);

    if (isNaN(number)) {
      throw Error(`The value ${value} passed as a parameter cannot be converted to a numeric value.`);
    }

    if (number === 0) {
      throw Error(`The parameter ${value} cannot be equal to zero (0).`)
    }

    const R = Math.random();

    return Number(-Math.log(1 - R) / number);


  } catch (error) {
    throw Error(`Inverse transform method is failed: ${error}`);
  }
};

const MixedCongruentialMethod = (a: number, c: number, m: number) => {
  try {

    const x0 = Math.random();

    return (a * x0 + c) % m;

  } catch (error) {
    throw  Error(`Mixed congruential method is failed: ${error}`);
  }
};

export {
  InverseTransformMethod,
  MixedCongruentialMethod
};