class Address {
    constructor(public city: string) {}
}
class User {
    public age: number;
    public address: Address;
    constructor(public name: string) {}
}

class UserBuilder {
    public user: User
    constructor(name: string) {
        this.user = new User(name)
    }
    setAge(age:number) {
        this.user.age = age
        return this
    }
    setAddress(address: Address) {
        this.user.address = address;
        return this;
    }
    build(){
      return this.user;
    }
}

const user = new UserBuilder('Bhushan').setAddress(new Address('Rahata')).setAge(12).build();
console.log(user);
