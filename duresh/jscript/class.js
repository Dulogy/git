class User {

    constructor(name,age) {
      this.name = name;
      this.age = age;
    }
  
    show() {
      console.log(this.name + this.age);
    }
  
  }
  
  let user = new User("durgesh ",21);
  user.show();