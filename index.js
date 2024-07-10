// Code your solutions in this file
function writeCards(names, occasion) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${occasion} gift!`);
  }
  
  function countDown(n) {
    for (let i = n; i >= 0; i--) {
      console.log(i);
    }
  }