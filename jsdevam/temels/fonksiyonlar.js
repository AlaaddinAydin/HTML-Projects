// fonk tanımlşama

function merhaba(name = "bilgi yok ", age = "bilgi yok") {

    /* if (typeof name === "undefined") name = "bilgi yok";

    if(typeof age === "undefined")
    console.log(`İsim : ${name} yaş : ${age}`); */
}
/* 
merhaba("mehmet", 23);

merhaba("ayşe", 44);

merhaba();

merhaba("kadir");
 */


/* const merhaba = function (name) {
    console.log("merhaba  " + name);
}
merhaba("murat"); */

//IIFE

/* function(name) {
    console.log("merhaba: "+ name);
} ("murat"); */


const database = {
    host: "localhost",
    add: function () {
        console.log("eklendi");
    },

    get: function () {
        console.log("alındı");
    },

    update: function () {
        console.log("değiştirildi");
    },

    delete: function () {
        console.log("silindi");
    }


}

console.log(database.host);

database.add();

database.delete(10);