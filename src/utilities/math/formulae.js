const InverseTransformMethod = (value) => {
  try {
    const R = Math.random()
    return Number(-Math.log(1 - R) / value)
  } catch (error) {
    console.log(`The parameter 'value' cannot be equal to 0: ${error}`)
    return null
  }
}

const MixedCongruentialMethod = (a, c, m) => {
  try {
    const x0 = Math.random();
    return (a * x0 + c) % m;
  } catch (error) {
    console.log(`Mixed Congruential Method: ${error}`)
    return null
  }
}

export {
  InverseTransformMethod,
  MixedCongruentialMethod
}