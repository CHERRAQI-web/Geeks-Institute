function allTruthy(...args) {
  return args.every(arg => Boolean(arg));
}
console.log(allTruthy(true, false, true))