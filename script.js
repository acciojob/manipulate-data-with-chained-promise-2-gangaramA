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

// Call getData() and chain the promises
getData()
  .then(filterEven)
  .then(multiplyByTwo)
  .catch(error => console.error(error));

// Cypress test code
describe('Data Manipulation with Promises', () => {
  it('should filter even numbers and multiply them by 2', () => {
    cy.visit('/main.html'); 

    cy.get('#output').should('have.text', ''); 

    // Increase wait time to allow filterEven() to complete
    cy.wait(1500); 

    cy.get('#output').should('have.text', '2,4'); 

    cy.wait(2000); 

    cy.get('#output').should('have.text', '4,8'); 
  });
});