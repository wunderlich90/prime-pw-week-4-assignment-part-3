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
  for (let content of basket) {
    console.log('Contents of Basket:', content);
  }
}
