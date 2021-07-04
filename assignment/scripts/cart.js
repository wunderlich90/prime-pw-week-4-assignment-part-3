console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem (item){
  basket.push(item);
  return true;
}

console.log('testing addItem:', addItem('Life cereal'));
console.log('testing addItem:', addItem('peanut butter'));
console.log('testing addItem:', addItem('coffee'));
console.log('testing addItem:', addItem('milk'));
console.log('testing addItem:', addItem('bread'));

console.log(basket);

function listItems(){
  for (let i=0; i<basket.length; i++) {
    console.log('Cart contents:', basket[i]);
  }
}

listItems();

function empty(item) {
  basket.length = 0;
}
empty();
console.log(basket);
