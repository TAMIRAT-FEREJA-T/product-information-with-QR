// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
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
  // Check if any of the input fields are empty.
  if (serial_number.value === "" || prod_model.value === "" || prod_name.value === "" || company_name.value === "" || prod_date.value === "" || exp_date.value === "") {
    alert("Please fill all data.");
    return;
  }

  // Otherwise, insert the data into Firebase.
  var production_date = prod_date.value;
  var expire_date = exp_date.value;

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
      open('/confiry.html');
    })
    .catch((error) => {
      alert("unsuccessful ,error" + error);
    });
}

// -------------------show product

// -----------

insbtn.addEventListener('click', insertdata);
