const myFunction = (variable) => {
  let name = 'asher';

  const setState = () => name + 1;

  return function () {
    const state = name + variable;

    return [state, setState];
  };
};

myFunction()()()();

var list = [1, 2, 3, 4];

list.sort();

document.querySelector('div').forEach();
