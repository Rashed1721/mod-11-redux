const arr = ["mezbha bhai", "mizan", "tanmoy"];

console.log(arr);

//currying function

const add = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

console.log(add(1)(1)(1));
