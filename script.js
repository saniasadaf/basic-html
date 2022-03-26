
// console.log(m);
// miniScript();
// function miniScript() {
//   console.log("mini script exploring js");
// }
// var m = 10;

// console.log(m);

// const m = 5;

// var x =300;;
// function myscript(){
//    if(false){
//         var x=400;
//    }
    
//     console.log(x);

// }
// myscript();

// let x=true;
// function hoist(){
//    if(3===4){
//         let x= false;
//    }
    
//     console.log(x);
// }
// hoist();


// closure
// function z(){
//         var a=7;
//         function x(){
//             var b=9;
//             function y(){
//                 console.log(a,b);
//             }
//             y();
//         }
//         x();
//     }
//     z();


// synchronous
// console.log("start")
// for(i=0; i<20; i++){
//     console.log(i)
// }
// console.log("end")


// s/ Asynchronous
// console.log("start")
// setTimeout(() => {
//     console.log("Middle")
// }, 2000)
// console.log("end")

// let assignment = new Promise(function(resolve,reject){
//     if(1>2){
//         resolve("resolved");
//     }else{
//         reject("rejected");
//     }
// });
// assignment
// .then (function(res){console.log(res)})
// .catch(function(err){console.log(err)})


// async function getsomeData(value){
//    const result = await fectchTheData(value);
//    return result;
// }
// getsomeData('some value')

// .then(function(res){console.log(res)})
// .catch(function(err){console.log(err)})


// mappingc 
// const arr1 = [1,3,5,9];
// const arr2 = [],
// const mapping =arr1.map((item,i)=>{
//     return arr2.item;
    
// })


// axios api call
// function fetchProducts() {

//     axios.get("https://fakestoreapi.com/products")

//     .then(function(res){
//         console.log(res);
//     })
//     .catch(function(err){
//         console.log(err);
//     })
// }

// let heading = document.getElementById("heading");
// console.log(heading);

let heading1 = document.getElementsByClassName("heading1")
heading1.innerHtml="this is <b>sania</b>";