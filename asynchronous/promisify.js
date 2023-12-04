// after callback and promise, we will change callback to promise.
// in node js there's a function from core module called util that can change callback to promise.
// and its called promisify my friend.
// first we need to import util from core module.
// const { promisify } = require('util');
import { promisify } from 'util';
// and then lets import the getUsers function from asynchronous/callback.js
// const getUsers = require('./callback');
import getUsers from './callback.js';
// and this is the magic of promisify:
const getUsersPromise = promisify(getUsers);
// and after this we can use getUsersPromise as a promise.
// like this code below:
getUsersPromise(true).then(users => console.log(users)).catch(err => console.log(err.message));
// and this works like a charm.
// its just like converting the callback to promise.
// and that's it.