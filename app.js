// CONSTRUCTOR FUNCTION
function User(username, email) {
	this.username = username;
	this.email = email;
}

// prototype model
User.prototype.login = function () {
	console.log(`${this.username} has logged in!`);
	return this;
};

User.prototype.logout = function () {
	console.log(`${this.username} has logged out!`);
	return this;
};

// Admin class
function Admin(username, email, title) {
	User.call(this, username, email);
    this.title = title; 
}

Admin.prototype = Object.create(User.prototype); // creates a new prototype and bases it to the User prototype

Admin.prototype.deleteUsers = function () {
    // delete a user
}

// instance of the class
const userOne = new User("mario", "mario@themarioclub.co.uk");
const userTwo = new User("luigi", "luigi@themarioclub.co.uk");
const userThree = new Admin("ryu", "ryu@themarioclub.co.uk", "ninja-black-belt");

console.log(userOne, userTwo, userThree);
userOne.login();

userTwo.login().logout();

// the `new keyword`
// 1 - it creates a new empty object `{}`
// 2 - it bind the value of `this` to the newly created empty object
// 3 - it calls the constructor function to `build` the object
