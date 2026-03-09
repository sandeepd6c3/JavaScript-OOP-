
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



function createToaster(config) {
    return function (str) {

       let div= document.createElement("div");
       div.textContent=str;
       div.className=`inline-block ${config.theme==="dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`;

       document.querySelector(".parent").appendChild(div);

       setTimeout(() => {
        document.querySelector(".parent").removeChild(div);
       },config.duration*1000)
    };
}

let toaster=createToaster({
    positionX: "right",
    positionY: "",
    theme: "light",
    duration: 3,
});

toaster("Download Done");

setTimeout(() => {
    toaster("Harsh accepted your request ")
}, 2000);