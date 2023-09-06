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

 import {getDatabase,ref,get,set,child,update,remove}
 from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";
 const db = getDatabase();

 // references
 var serial= document.getElementById('serialnumber');

 var search = document.getElementById('submit');

 var vproduction = document.getElementById('productiondatev');
 var vseriar = document.getElementById('serialnumberv');


 Selbtn.addEventListener('click',selectdata);


 function selectdata(){
     const dbref = ref(db);
     get(child(dbref,"products/"+ serialnumber.value)).then((snapshot)=>{
         if(snapshot.exists()){
             vproduction.value = snapshot.val().productiondate;
             vseriar.value = snapshot.val().serialnumber;
             // Genbox.value = snapshot.val().Gender;
     }
         else{
             alert ("No such record found") ;
         }
     })
         .catch((error)=>{
             alert ('Error'+ error);
         });
     

         var selbtn = document.getElementById('select');

 }
 // btn
 


