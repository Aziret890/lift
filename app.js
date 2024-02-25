// // motion ==> MoTiOn <=> mOtIoN
// let a = 'motion'
// let r =''
// let q = ''
// let rez = a.split('').map((el, ind)=>{
//    if(ind %2 !== 0){
//     return  r+=el.toLowerCase()
//    }else{
//       return r+=el.toUpperCase()
//    }
// })
// let d=  a.split('').map((el,ind)=>{
//    if(ind%2!==0){
//       return q+=el.toUpperCase()
//    }else{
//       return q+=el.toLowerCase()
//    }
// })
// console.log(r ,q);
//!vnepnqp
//todo vbeiovo
//?dbvhi
////vbeuq[vbu[vbe[b]]]
const pl = document.querySelector(".pl");
const a = document.querySelector(".a");
const a1 = document.querySelector(".a1");
const a2 = document.querySelector(".a2");
const a3 = document.querySelector(".a3");
const a4 = document.querySelector(".a4");
const a5 = document.querySelector(".a5");
const a6 = document.querySelector(".a6");
const a7 = document.querySelector(".a7");
const chel = document.querySelector(".chel");
const div = document.querySelector(".div");
const h1 = document.querySelector(".h11");
a.addEventListener("click", () => {
  chel.style.top = "-5.5pc";
  h1.innerHTML = "лифт двигается";
  setTimeout(() => {
    h1.innerHTML = "1";
  }, 3000);
});
a1.addEventListener("click", () => {
  chel.style.top = "-11pc";
  h1.innerHTML = "лифт двигается";
  setTimeout(() => {
    h1.innerHTML = "2";
  }, 3000);
});
a2.addEventListener("click", () => {
  chel.style.top = "-16.7pc";
  h1.innerHTML = "лифт двигается";
  setTimeout(() => {
    h1.innerHTML = "3";
  }, 3000);
});
a3.addEventListener("click", () => {
  chel.style.top = "-22.5pc";
  h1.innerHTML = "лифт двигается";
  setTimeout(() => {
    h1.innerHTML = "4";
  }, 3000);
});
a4.addEventListener("click", () => {
  chel.style.top = "-28pc";
  h1.innerHTML = "лифт двигается";
  setTimeout(() => {
    h1.innerHTML = "5";
  }, 3000);
});
a5.addEventListener("click", () => {
  chel.style.top = "-33.8pc";
  h1.innerHTML = "лифт двигается";
  setTimeout(() => {
    h1.innerHTML = "6";
  }, 3000);
});
a6.addEventListener("click", () => {
  a;
  chel.style.top = "-39.4pc";
  h1.innerHTML = "лифт двигается";
  setTimeout(() => {
    h1.innerHTML = "7";
  }, 3000);
});
a7.addEventListener("click", () => {
  chel.style.top = "-45.1pc";
  h1.innerHTML = "лифт двигается";
  setTimeout(() => {
    h1.innerHTML = "8";
  }, 3000);
});
