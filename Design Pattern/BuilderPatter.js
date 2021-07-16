var Address = /** @class */ (function () {
    function Address(city) {
        this.city = city;
    }
    return Address;
}());
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var UserBuilder = /** @class */ (function () {
    function UserBuilder(name) {
        this.user = new User(name);
    }
    UserBuilder.prototype.setAge = function (age) {
        this.user.age = age;
        return this;
    };
    UserBuilder.prototype.setAddress = function (address) {
        this.user.address = address;
        return this;
    };
    UserBuilder.prototype.build = function () {
        return this.user;
    };
    return UserBuilder;
}());
var user = new UserBuilder('Bhushan').setAddress(new Address('Rahata')).setAge(12).build();
console.log(user);
