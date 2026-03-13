
// Closure is a function that has access to the parent scope, even after the parent function has closed. It allows a function to access variables from an enclosing scope or environment, even after it leaves the scope in which it was declared.
// In JavaScript, closures are created every time a function is created, at function creation time. A closure is a combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.

// Example of closure

// !!!!!!! ------- Private Counter using Closure -------- !!!!!!!

// function abcd() {
//     let a = 0;
//     return function () {
//         a++;
//         console.log(a);
//     };
// }
// let fun = abcd();
// fun();
// fun();
// fun();

// let fun2 = abcd();
// fun2();
// fun2();
// fun2();

//              !!!!!! ------------ Encapsulation ----------!!!!!!

// function counter() {
//     let click = 0;

//     return function () {
//         if (click < 5) {
//             click++;
//             console.log(`clicked : ${click} times` );
//         }
//         else{
//             console.log("TRY AGAIN LATER !");

//         }
//     }
// }


// let fun=counter();

// fun();
// fun();
// fun();
// fun();
// fun();
// fun();
// fun();





// function createtoaster(config) {

//     return function (str) {
//         let div = document.createElement("div");
//         div.textContent = str;
//         div.className =
//             "inline-block bg-gray-800 text-white px-6 py-3 rounded shadow-lg pointer-events-none transition-opacity duration-300";
//         document.querySelector(".parent").appendChild(div);
//         setTimeout(() => {
//             document.querySelector(".parent").removeChild(div);
//         }, config.duration * 1000);
//     };
// }
// let toaster = createtoaster({
//     positionX: "right",
//     positionY: "top",
//     theame: "dark",
//     duration: 3,
// });

// toaster("Download Completed!");


// setTimeout(() => {
//     toaster("File Deleted!");
// },2000);



//     --------------!!!!!! This Keyword !!!!!!----------


// Global Scope window hoti hai 
// console.log(this);

// Functional Scope me bhi window hoti hai 
// function fun(){
//     console.log(this);

// }
// fun();


// Method Scope me Object hi hoti hai 

// let obj = {
//     name: "sandeep",
//     age: 21,
//     sayname: function () {
//         console.log(this);

//     },
// };

// obj.sayname();

// ------!!!!!! Event handler pr this keyword 

// document.querySelector("h1").addEventListener("click",function(){

//     console.log(this.style.backgroundColor="red");
// })




//      ---------------- Call Apply Bind --------------

// let obj = {

//     name: "sandeep",
//     age: 21,
// };

// function fun(a,b,c) {

//     console.log(this,a,b,c  );

// }

// fun.call(obj,1,2,3 );


// -------- Bind Ka use krke ek project ------------

//  let form = document.querySelector("form");
// let username = document.querySelector("#name");
// let role = document.querySelector("#role");
// let bio = document.querySelector("#bio");
// let photo = document.querySelector("#photo");

// const userManager = {
//   users: [],
//   init: function () {
//     form.addEventListener("submit", this.submitForm.bind(this));
//   },
//   submitForm: function (e) {
//     e.preventDefault();
//     this.addUser();
//   },
//   addUser: function () {
//     this.users.push({
//       username: username.value,
//       role: role.value,
//       bio: bio.value,
//       photo: photo.value,
//     });

//     form.reset();
//     this.renderUi();
//   },
//   renderUi: function () {
//     document.querySelector(".users").innerHTML = "";
//     this.users.forEach(function (user) {
//       const card = document.createElement("div");
//       card.className =
//         "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";

//       // Image
//       const img = document.createElement("img");
//       img.className =
//         "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
//       img.src = user.photo;
//       img.alt = "User Photo";
//       card.appendChild(img);

//       // Name
//       const name = document.createElement("h2");
//       name.className = "text-2xl font-bold mb-1 text-blue-700";
//       name.textContent = user.username;
//       card.appendChild(name);

//       // Role
//       const role = document.createElement("p");
//       role.className = "text-purple-500 mb-2 font-medium";
//       role.textContent = user.role;
//       card.appendChild(role);

//       // Description
//       const desc = document.createElement("p");
//       desc.className = "text-gray-700 text-center";
//       desc.textContent = user.bio;
//       card.appendChild(desc);

//       // Finally, append the card wherever needed, for example:

//       document.querySelector(".users").appendChild(card);
//     });
//   },
//   removeUser: function () {},
// };

// userManager.init();



// ------------------------- Object  Oriented Javascript --------------

//  function LandRover(name,price,color,company){

//   this.name=name;
//   this.price=price;
//   this.color=color;
//   this.company=company;


// }
//   LandRover.prototype.write=function(text){
//     let h1=document.createElement("h1");
//     h1.textContent=text;
//     h1.style.color=this.color;
//     document.body.append(h1);
//   }

// let car1=new LandRover("Defender","1.5cr","Blue","LandRover");



// ------------------  CLASS IN JAVASCRIPT ---------------------

// class Createpencil {
//   constructor(name, company, price, color) {

//     this.name = name;
//     this.company = company;
//     this.price = price;
//     this.color = color;

//   }
//   erase(){
//     document.querySelectorAll("h1").forEach(elem => {
//       if(elem.style.color===this.color){
//         elem.remove();
//       }
//     });
//   }

//   write(text) {
//     let h1 = document.createElement("h1");
//     h1.style.color = this.color;
//     h1.textContent = text;
//     document.body.appendChild(h1);
//   }

// }
// let p1 = new Createpencil("nataraj", "nataraj", 10, "black");
// let p2 = new Createpencil("apsra", "apsra", 20, "red");



// class Createpencil {
//   constructor(name, company, price, color) {
//     this.name = name;
//     this.company = company;
//     this.price = price;
//     this.color = color;
//   }
//   write(text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = `${this.name} : ${text}`;
//     h1.style.color = this.color;
//     document.body.appendChild(h1);
//   }

//   erase() {
//     document.querySelectorAll("h1").forEach(elem => {
//       if (elem.style.color === this.color) {
//         elem.remove();
//       }
//     });
//   }
// }
// class Admin extends Createpencil {
//   constructor(name, company, price, color) {
//     super(name, company, price, color)
//     this.role = "admin";
//   }
//   remove() {
//     document.querySelectorAll("h1").forEach(elem => {
//       elem.remove();
//     })
//   }
// }
// let p1 = new Createpencil("Nataraj", "Nataraj Company", 10, "red");
// let a1 = new Admin("Admin HU", "Meri hai ", 1000000, "blue");



// ---------------------- Inheritance ---------------

// let chai = {

//   paise: 10,
//   color:"Dark",
//   pina: function () {
//     console.log("Gut Gut Gut ");
//   },
// }

// let c1=Object.create(chai);
// console.log(c1);
// c1.pina();  



// function KuchDeerBaadChalunga(fnc){


// setTimeout(fnc,Math.floor(Math.random()*10)*1000);

// }

// KuchDeerBaadChalunga(function (){
//    console.log("Ha me chal gya ");
// })



// -------------------  Callback Hell ---------------

// function ProfileLakerAao(username, cb) {
//    console.log("Fatching Profile Data ....");

//    setTimeout(() => {
//       cb({ id: 101, username, age: 26, email: "huihui@hui.com" })
//    }, 2000)
// }

// function saarePostLakeraao(id, cb) {
//    console.log("Fatching Posts ....");

//    setTimeout(() => {
//       cb({ id: id, posts: ["Hey"] });
//    }, 3000);
// }

// function SavedpostNikalo(id, cb) {
//    console.log("Fatching Saved Posts ....");

//    setTimeout(() => {
//       cb({ id: id, saved: [1, 2, 3, 4, 5, 67] });
//    } , 4000)

// }

// ProfileLakerAao("Sandeep", function (data) {
//    console.log(data);

//    saarePostLakeraao(data.id, function (posts) {
//       console.log(posts);

//       SavedpostNikalo(data.id, function (saved) {
// console.log(saved);

//       });
//    });
// });

//  ------------------------ Promise -------------------

// let pr = new Promise(function (res, rej) {
//    setTimeout(() => {
//       let rn = Math.floor(Math.random() * 10);

//       if (rn > 5) res("Resolve with " + rn);
//       else rej("Rejected with " + rn);
//    }, 3000);
// })

// pr.then(function (val) {
//    console.log(val);
// })
//    .catch(function (val) {
//       console.log(val);

//    })


//  ----------------- Async/Await syntax ,error handling with try catch -----------------

// let pr = new Promise(function (res, rej) {
//    setTimeout(() => {
//       let rn = Math.floor(Math.random() * 10);

//       if (rn > 5) res("resolve with " + rn);
//       else rej("Rejected with " + rn);

//    },20000);
// });

// async function abcd() {

//    try {
//       let val = await pr;
//       console.log(val);

//    }
//    catch (err) {
//       console.log(err);

//    }
// }

// abcd();



// --------------- Fetch API + HTTP Basics ------------

fetch("https://randomuser.me/api/")

   .then((rawdata) => {
      return rawdata.json();
   })
   .then((data) => {
      console.log(data.results[0].name.first);

   })
   .catch((err) => {
      console.log(err);

   });