// getData() function (unchanged)
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]); 
    }, 3000); 
  });
}

// filterEven() function 
function filterEven(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = data.filter(num => num % 2 === 0);
      // Update the output element here
      document.getElementById('output').textContent = evenNumbers.join(', '); 
      resolve(evenNumbers);
    }, 1000); 
  });
}

// multiplyByTwo() function
function multiplyByTwo(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedNumbers = data.map(num => num * 2);
      // Update the output element here
      document.getElementById('output').textContent = multipliedNumbers.join(', '); 
      resolve(multipliedNumbers);
    }, 2000); 
  });
}

// Chain the promises and handle the output
getData()
  .then(filterEven)
  .then(multiplyByTwo)
  .catch(error => console.error(error));