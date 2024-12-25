//your JS code here. If required.
// Function that returns a promise resolving with an array after 3 seconds
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]); // Initial array
    }, 3000);
  });
}

// Update the output div with a message
function updateOutput(message) {
  document.getElementById('output').textContent = message;
}

// Chain promises to filter and transform data
getNumbers()
  .then((numbers) => {
    // Filter even numbers after 1 second
    return new Promise((resolve) => {
      setTimeout(() => {
        const evens = numbers.filter((num) => num % 2 === 0);
        updateOutput(`Filtered Evens: ${evens.join(', ')}`);
        resolve(evens);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    // Multiply even numbers by 2 after 2 seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubled = evenNumbers.map((num) => num * 2);
        updateOutput(`Doubled Evens: ${doubled.join(', ')}`);
        resolve(doubled);
      }, 2000);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
    updateOutput('An error occurred!');
  });

