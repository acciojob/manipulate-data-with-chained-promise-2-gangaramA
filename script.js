function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]); 
    }, 3000); 
  });
}

function filterEven(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = data.filter(num => num % 2 === 0);
      updateOutput(evenNumbers.join(', ')); 
      resolve(evenNumbers);
    }, 1000); 
  });
}

function multiplyByTwo(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedNumbers = data.map(num => num * 2);
      updateOutput(multipliedNumbers.join(', ')); 
      resolve(multipliedNumbers);
    }, 2000); 
  });
}

function updateOutput(output) {
  const outputElement = document.getElementById('output');
  outputElement.textContent = output;
}

getData()
  .then(filterEven)
  .then(multiplyByTwo)
  .catch(error => console.error(error));