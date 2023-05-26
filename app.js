class User {

    constructor(username, email) {
        // setting up the properties
        this.username = username;
        this.email = email;
        this.score = 1;
    }

    login() {
        console.log(`${this.username} has logged in!`);
        return this;
    }

    logout() {
        console.log(`${this.username} has logged out!`);
        return this;
    }

    inScore() {
        this.score += 1;
        console.log(`${this.username} has scored ${this.score}`);
        return this;
    }

}

class Admin extends User {

    constructor(username, email, title) {

        super(username, email);
        this.title = title;

    }

    deleteUser(user) {

        users = users.filter(u => u.username !== user.username);

    }

}

// instance of the class
const userOne = new User("mario", "mario@themarioclub.co.uk");
const userTwo = new User("luigi", "luigi@themarioclub.co.uk");
const userThree = new Admin("ryu", "ryu@themarioclub.co.uk", "black-belt-ninja");

// the `new keyword`
// 1 - it creates a new empty object `{}`
// 2 - it bind the value of `this` to the newly created empty object
// 3 - it calls the constructor function to `build` the object

let users = [userOne, userTwo, userThree];
console.log(userThree);