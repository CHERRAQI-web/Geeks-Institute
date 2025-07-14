function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  });

//promiseArr = [
//   timesTwoAsync(1), //  Promise résolue avec 2
//   timesTwoAsync(2), // Promise résolue avec 4
//   timesTwoAsync(3)  //  Promise résolue avec 6
// ];
//Promise.all return un tableau result = [2, 4, 6];

