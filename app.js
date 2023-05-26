class User {

    constructor(username, email) {
        // setting up the properties
        this.username = username;
        this.email = email;
    }

}

// instance of the class
const userOne = new User("mario", "mario@themarioclub.co.uk");
const userTwo = new User("luigi", "luigi@themarioclub.co.uk");

console.log(userOne, userTwo);

// the `new keyword`
// 1 - it creates a new empty object `{}`
// 2 - it bind the value of `this` to the newly created empty object
// 3 - it calls the constructor function to `build` the object