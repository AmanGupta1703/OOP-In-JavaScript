// CONSTRUCTOR FUNCTION
function User (username, email) {
    this.username = username;
    this.email = email;

    this.login = function () {
        console.log(`${this.username} has logged in!`);
    }
}

// instance of the class
const userOne = new User("mario", "mario@themarioclub.co.uk");
const userTwo = new User("luigi", "luigi@themarioclub.co.uk");

console.log(userOne);
userOne.login();

// the `new keyword`
// 1 - it creates a new empty object `{}`
// 2 - it bind the value of `this` to the newly created empty object
// 3 - it calls the constructor function to `build` the object