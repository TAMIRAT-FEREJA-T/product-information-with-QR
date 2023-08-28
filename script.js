
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8KaOW3rD9uv9rcXzzLSFxlej8a0gUXWU",
  authDomain: "product-management-a03b5.firebaseapp.com",
  databaseURL: "https://product-management-a03b5-default-rtdb.firebaseio.com",
  projectId: "product-management-a03b5",
  storageBucket: "product-management-a03b5.appspot.com",
  messagingSenderId: "768243012874",
  appId: "1:768243012874:web:21aa52654c8c33bd7516f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, get, set, child, update, remove }
  from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";
const db = getDatabase();
// references

var serial_number = document.getElementById("serialnumber");
var prod_model = document.getElementById("productmodel");
var prod_name = document.getElementById("productname");
var company_name = document.getElementById("companyname");
var prod_date = document.getElementById("productiondate");    
var exp_date = document.getElementById("expiredate");


var insbtn = document.getElementById("submit");

// insert data
function insertdata() {
  var production_date= prod_date.value;
  var expire_date= exp_date.value;

  set(ref(db, "products/" + serial_number.value), {
    serialnumber: serial_number.value,
    productname: prod_name.value,
    prodmodel: prod_model.value,
    companyname: company_name.value,
    productiondate: production_date,
    expiredate: expire_date
  })
    .then(() => {

      alert("Data inserted");
      open('/confiry/index.html');
    })
    .catch((error) => {
      alert("unsuccessful ,error" + error);
    });
}

insbtn.addEventListener('click', insertdata);
