// {
//   Promise.all() takes iterable of promises as an input and returns a single promise that resolves into
//  array of input promises. the returned promise will resolve when all input promise are resolved or contains
//  no promises. It rejects immediately if any of the promise rejects or throw an error
//  Suppose you need to gather information from three separate remote API calls and when you have the results from all three API calls,
//  you then need to run some further code using all three results.
//  That situation would be perfect for Promise.all().
//  if any individual promise is rejected Promise.all() is rejected. This is called fast fail behavior
// }

const promise1 = Promise.resolve('promise.all');
const promise2 = 'has been';
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'resolved');
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => console.log(err));
