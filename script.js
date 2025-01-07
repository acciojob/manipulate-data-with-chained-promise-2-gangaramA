// getData() function
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); // Resolve after 3 seconds
  });
}

// filterEven() function
function filterEven(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = data.filter((num) => num % 2 === 0);
      // Display intermediate result
      document.getElementById('output').textContent = evenNumbers.join(', ');
      resolve(evenNumbers);
    }, 1000); // Simulate processing after 1 second
  });
}

// multiplyByTwo() function
function multiplyByTwo(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedNumbers = data.map((num) => num * 2);
      // Display final result
      document.getElementById('output').textContent = multipliedNumbers.join(', ');
      resolve(multipliedNumbers);
    }, 2000); // Simulate processing after 2 seconds
  });
}

// Call getData() and chain the promises
getData()
  .then((data) => filterEven(data)) // Filter even numbers after 1 second
  .then((evenNumbers) => multiplyByTwo(evenNumbers)) // Multiply by 2 after 2 seconds
  .catch((error) => {
    console.error(error);
    document.getElementById('output').textContent = 'An error occurred!';
  });