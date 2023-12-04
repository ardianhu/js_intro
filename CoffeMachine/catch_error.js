try {
    console.log("awal try");
    // try will be executed, and will be stopped if there's any error
    // errorCode;
    console.log("akhir try");
} catch (error) {
    // catch will be executed if there's an error in try
    console.log("error");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log("persetan");
    // finally will be executed in any situation.
}

const json = '{ "name": "Jaka", "age": 21}'; //this is json format
const badjson = '{ bad json }'; // error json
const onlyAge = '{ "age": 21 }'; // what will hapen if we provide just age, the catch still be ignored in this case
// but this is equal to error. and will affect our program.

try {
    const user  = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("'name' is required");
        // this called throw my friend
        // this kind of error from onlyAge is handled
    }

    unnamedVar;
    //what about this. errorCode is not defined
    // the answer is with if statement in catch, to make a different message of error.

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}

// and what about custom error, yeah, we can also create our own error clcass 
// like in the example above, JSON.parse will convert the string to object, if the format is wrong the program will throw SyntaxError.
// so there's probably some error that wasn't covered by js.
// so the best way is we shall define our own error class, with customized name and message.
// example. to validate data from json.
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
const jsonData = '{ "model": "Thinkpad" }';
// here the jsonData is just fine, nothing wrong about it. but its just missing one properties.
try {
    const laptop = JSON.parse(jsonData);

    if(!laptop.model) {
        throw new ValidationError("'model' is required");
    }
    if(!laptop.price) {
        throw new ValidationError("'price' is required");
    }
    // and here we create the new error handling to missing properties

    console.log(laptop.model);
    console.log(laptop.price);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}