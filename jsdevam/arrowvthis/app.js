const person = {
    age: 25,

    /* tellAge: function () {

        //this personu göstermekte !şuan!
        console.log(this)
        console.log(this.age);
    }.bind(this) */

    tellAge: () => { // arrow bindlı func gibi  this = window
        console.log(this);
        console.log(this.age);
    }

    //this = window 
}

person.tellAge();