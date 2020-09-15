// state of promise
/* 1. pending state
    2. onfulfilled state
    3. onRejection
    4. settled
*/
//methods
/* then, catch, finally */

const func = () => {
  var prom = new Promise((resolve, reject) => {
    console.log('start');
    resolve('resolved');
  });
  return prom;
};

result = func();
result
  .then((data) => {
    console.log('data', data);
  })
  .catch((err) => {
    console.log('error', err);
  })
  .finally(() => {
    console.log('promise settled');
  });
