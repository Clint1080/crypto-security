
// let message = 'I love cryptography'
// let messageArr = message.toLowerCase().split('')

// const cypher = (arr) => {
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] === 'a') {
//           arr[i] = 'g';
//         } else if (arr[i] === 'b') {
//           arr[i] = 'h';
//         } else if (arr[i] === 'c') {
//           arr[i] = 'i';
//         } else if (arr[i] === 'd') {
//           arr[i] = 'j';
//         } else if (arr[i] === 'e') {
//           arr[i] = 'k';
//         } else if (arr[i] === 'f') {
//           arr[i] = 'l';
//         } else if (arr[i] === 'g') {
//           arr[i] = 'm';
//         } else if (arr[i] === 'h') {
//           arr[i] = 'n';
//         } else if (arr[i] === 'i') {
//           arr[i] = 'o';
//         } else if (arr[i] === 'j') {
//           arr[i] = 'p';
//         } else if (arr[i] === 'k') {
//           arr[i] = 'q';
//         } else if (arr[i] === 'l') {
//           arr[i] = 'r';
//         } else if (arr[i] === 'm') {
//           arr[i] = 's';
//         } else if (arr[i] === 'n') {
//           arr[i] = 't';
//         } else if (arr[i] === 'o') {
//           arr[i] = 'u';
//         } else if (arr[i] === 'p') {
//           arr[i] = 'v';
//         } else if (arr[i] === 'q') {
//           arr[i] = 'w';
//         } else if (arr[i] === 'r') {
//           arr[i] = 'x';
//         } else if (arr[i] === 's') {
//           arr[i] = 'y';
//         } else if (arr[i] === 't') {
//           arr[i] = 'z';
//         } else if (arr[i] === 'u') {
//           arr[i] = 'a';
//         } else if (arr[i] === 'v') {
//           arr[i] = 'b';
//         } else if (arr[i] === 'w') {
//           arr[i] = 'c';
//         } else if (arr[i] === 'x') {
//           arr[i] = 'd';
//         } else if (arr[i] === 'y') {
//           arr[i] = 'e';
//         } else if (arr[i] === 'z') {
//           arr[i] = 'f';
//         } else {
//             arr[i] = arr[i]
//         }
//     }
//     return arr
// }

// console.log(cypher(messageArr.join('')))





/////////     THIS IS WHAT WE DID WITH SCOTT       /////////////
// This map is the key to the cipher and can by changed as desired.

const map = {
  a: "g",
  b: "h",
  c: "i",
  d: "j",
  e: "k",
  f: "l",
  g: "m",
  h: "n",
  i: "o",
  j: "p",
  k: "q",
  l: "r",
  m: "s",
  n: "t",
  o: "u",
  p: "v",
  q: "w",
  r: "x",
  s: "y",
  t: "z",
  u: "a",
  v: "b",
  w: "c",
  x: "d",
  y: "e",
  z: "f",
  " ": '*'
};

// our message to be encrypted. 
let message = 'hello world'

// nkrru cuxrj

// the cipher function takes in a key object that is the key to the cipher as well as the message to be encrypted. 
const cipher = (key, message) => {
  // splits the message string into an array. 
  message = message.split('')
  // declaring a new string to hold the encrypted message.
  let encrypted = ''

  // looping over the message. 
  for (let i = 0; i < message.length; i++){

      // looping over the key object
    for(let prop in key){

      // Checking if the current character of the message matches one of the key characters. 
      if(message[i] === prop){

        console.log(message[i])
        // adding the property of the matching key to our encrypted string. 
        encrypted += key[prop]
      }
    }
  }

  return encrypted
}


// Does the same as the cipher function above but replaces the characters with the matching property name rather than the property value. 
const decipher = (key, message) => {
  message = message.split('')
  let decrypted = ''
  for (let i = 0; i < message.length; i++){
    for(let prop in key){
      if(message[i] === key[prop]){
        decrypted += prop
      }
    }
  }
  return decrypted
}

let encrypted = cipher(map, message)
console.log(encrypted)
let decrypted = decipher(map, encrypted)
console.log(decrypted)

