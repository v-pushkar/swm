let arrA = [2, 3, 9, 2, 5, 1, 3, 7, 10];
let arrB = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10];

// check, if number is prime
const ifPrimeNum = n => {
  let prime = n > 1;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
      break;
    }
  }
  return prime;
};
// get repetition number
const countReapitTimes = (arr, num) => {
  const res = arr.filter(it => it === num).length;
  return res;
};
// create new arr with A,B arreys
const createArr = (A, B) =>
  A.reduce((acc, it) => {
    if (B.includes(it) && ifPrimeNum(countReapitTimes(B, it))) {
      return [...acc];
    } else {
      return [...acc, it];
    }
  }, []);
console.log(createArr(arrA, arrB));
const resultDiv = document.getElementById("result1");
resultDiv.innerText = JSON.stringify(createArr(arrA, arrB));
