let API_URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses"
let API_apend_priductlist = "/catalogData.json"
let API_apend_baskettlist = "/getBasket.json"
let API_apend_addToBasket = "/addToBasket.json"
let API_apend_deleteFromBasket = "/deleteFromBasket.json"

let xhr;

if (window.XMLHttpRequest) {
  xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  xhr = new ActiveXObject("Microsoft.XMLHTTP");
}

// makeGETRequest(body_API, apend_API) {
//   return new Promise((resolve, reject) => {
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState !== 4) return;
//       if (xhr.status === 200) {
//         resolve(xhr.responseText)
//       } else {
//         reject(console.log(`Error ${xhr.status}`));

//       }


//     }
//     xhr.open("GET", body_API + apend_API, );
//     xhr.send();
//   })
// }

// let xhr2;

// if (window.XMLHttpRequest) {
//   xhr2 = new XMLHttpRequest();
// } else if (window.ActiveXObject) {
//   xhr2 = new ActiveXObject("Microsoft.XMLHTTP");
// }


// const makeGETRequest2 = function (body_API, apend_API) {
//   return new Promise((resolve, reject) => {
//     xhr2.onreadystatechange = function () {
//       if (xhr2.readyState !== 4) return;
//       if (xhr2.status === 200) {
//         resolve(xhr2.responseText)
//       } else {
//         reject(console.log(`Error ${xhr2.status}`));
//       }
//     }
//     xhr2.open("GET", body_API + apend_API, );
//     xhr2.send();
//   })
// }