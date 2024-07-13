  
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
    import { getDatabase, ref, get, set, child, update, remove } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";
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
    const db = getDatabase();
    // references

    var prod_model = document.getElementById("productmodel");
    var prod_name = document.getElementById("productname");
    var company_name = document.getElementById("companyname");
    var prod_date = document.getElementById("productiondate");
    var exp_date = document.getElementById("expiredate");

    var Selbtn = document.getElementById("submit");

    Selbtn.addEventListener('click', selectdata);

    function selectdata() {
  var serialNumber = document.getElementById("serialnumber").value;

  if (serialNumber === "") {
    alert("Please enter the serial number.");
    return;
  }

  const dbref = ref(db);
  get(child(dbref, "products/" + serialNumber)).then((snapshot) => {
    if (snapshot.exists()) {
      prod_model.value = snapshot.val().prodmodel;
      prod_name.value = snapshot.val().productname;
      company_name.value = snapshot.val().companyname;
      prod_date.value = snapshot.val().productiondate;
      exp_date.value = snapshot.val().expiredate;

      console.log("ID: " + snapshot.key);

      // if (snapshot.val().link) {
      //   console.log("Link: " + snapshot.val().link);
      // } else {
      //   console.log("Link is not available.");
      // }

      document.getElementById('hide').classList.remove('hidden-details');
    } else {
      alert("No record found for the given serial number.");
      document.getElementById('hide').classList.add('hidden-details');
    }
  }).catch((error) => {
    alert('Error: ' + error);
    document.getElementById('hide').classList.add('hidden-details');
  });
  return 0;
}
// ...
  
