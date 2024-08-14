// Importing Module
// Named Exports in curly braces
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);
// console.log(`Importing module`);
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

// mixing default and named exports is allowed, but not recommended
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// Imports the Default export
// import add from './shoppingCart.js';
// Live connection - it's the same cart as in shoppingCart
// import add, { cart } from './shoppingCart.js';
// add('pizza', 3);
// add('apples', 5);
// add('bread', 2);
// console.log(cart);

// Top level await ES2022
// Top level await works for Modules
// Top level await blocks the execution of the module
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();

// console.log(data);

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// // //not very clean
// // lastPost.then((last) => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// The Module Pattern - the pre-ES6 way
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;
//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };
//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 1);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost); // undefined

// //CommonJS - used in Node
// //Export
// export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart`);
// };

// //Import
// const {addToCart} = require('./shoppingCart.js')

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
console.log(`Importing module`);
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import add, { cart } from './shoppingCart.js';
add('pizza', 3);
add('apples', 5);
add('bread', 2);
console.log(cart);

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

// This will not be in the final build, it's code only Parcel understands, and it's for hot changes in live-server without having to reload the page.
if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const jonas = new Person('Jonas');

Promise.resolve('test').then((x) => console.log(x));
