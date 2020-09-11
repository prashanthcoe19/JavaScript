//  A function that is passed as a parameter to another function is called a callback function

console.log('Start');

const searchMovie = (title, callback) => {
  setTimeout(() => {
    var response = title;
    callback(response);
  }, 2000);
};

const getResults = (result) => {
  console.log(`Search Results: ${result}`);
};

searchMovie('The Wolf Of Wall Street', getResults);
