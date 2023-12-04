// lets try to install moment package from npm with 'npm install moment';
const moment = require('moment');
// and we can uninstall a package like this 'npm uninstall moment';

const date = moment().format("MMM Do YY");
console.log(date);