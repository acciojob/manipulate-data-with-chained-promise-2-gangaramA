// getData() function
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); // Simulate data fetching
  });
}

// filterEven() function
function filterEven(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = data.filter((num) => num % 2 === 0);
      // Display intermediate result
      document.getElementById('output').textContent = ${evenNumbers.join(', ')};
      resolve(evenNumbers);
    }, 1000); // Simulate processing
  });
}

// multiplyByTwo() function
function multiplyByTwo(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedNumbers = data.map((num) => num * 2);
      // Display final result
      document.getElementById('output').textContent =${multipliedNumbers.join(', ')};
      resolve(multipliedNumbers);
    }, 2000); // Simulate processing
  });
}

// Call getData() and chain the promises
getData()
  .then(filterEven)
  .then(multiplyByTwo)
  .catch((error) => {
    console.error(error);
    document.getElementById('output').textContent = 'An error occurred!';
  });
