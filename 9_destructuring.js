const obj = { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 };

// obj.Alice;
// obj['Alice'];

const { Alice, Bob, Asher } = obj; // 2, 1, undefined
// const ALice = obj.Alice;

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

const [first, second, third, ...rest] = animal; //'ant', 'bison',
animal[0];
console.log(first); //'ant'
