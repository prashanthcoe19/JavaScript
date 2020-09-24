// An async function is a function declared with the async keyowrd.
// The async and await keywords enables synchronous, promise-based behavior to be written in cleaner style avoiding-
// chaining of promises.
// Async functions always returns promise. If return value of an async function is not a promise,
// it will be implicitly wrapped in a promise.
// asycn function can contain zero to more await expression.
// await expression suspend progress and resume only when awaited promise is either fulfilled or rejected
// to catch error we can use try catch block

async function example() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('promise');
    }, 1000);
  });
  //   let condition = await promise;
  //   return condition;

  try {
    var condition = await promise;
  } catch (error) {
    console.log('error');
  }
  return condition;
}

example().then((data) => {
  console.log(data);
});
