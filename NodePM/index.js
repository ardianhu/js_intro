// how to use the package in your project?
// before get into that, the package we're installed before is actually a module. that why there's a node_modules in our project directory.
// in the code there's a code that build a package.
// because its a module, we can use it in our project just like module we learn before.
// import variableName from 'packageName';
import _ from 'lodash';

//  underscore '_' is a standard variable name for lodash.

const myArray = [1,2,3,4,5,6,7,8,9,10];
// const sum = 0;
const sum = _.sum(myArray);
// for(let i = 0; i < myArray.length; i++) {
//     sum += myArray[i];
// }

console.log(sum);