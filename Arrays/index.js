// const arrayVazia = [];

// console.log(arrayVazia);         ([])
// console.log(arrayVazia.length);  (0)
// console.log(arrayVazia[0]);      (undefined)

const arrayVazia = [,,,];

// console.log(arrayVazia.length);  (3)
// console.log(arrayVazia[0]);      (undefined)
// console.log(arrayVazia[1]);      (undefined)
// console.log(arrayVazia[2]);      (undefined)

arrayVazia.push(50);
// console.log(arrayVazia);         ([ <3 empty items>, 50 ])    
// console.log(arrayVazia.length);  (4)