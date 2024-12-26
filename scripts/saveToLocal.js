// Function For Saving Medicine List To Local Storage
function save() {
  let mainArray = [];
  let morningMedicineMap = { morningMedicine: morningMedicineArray };
  let noonMedicineMap = { noonMedicine: noonMedicineArray };
  let nightMedicineMap = { nightMedicine: nightMedicineArray };

  // Pushing All Array To Main Array
  mainArray.push(morningMedicineMap, noonMedicineMap, nightMedicineMap);

  // Converting To Stringify JSON For Saving In Local Storage
  let stringifyArray = JSON.stringify(mainArray);
  //console.log(stringifyArray);

  // Setting Converted JSON to Local Storage
  localStorage.setItem("allMedicine", stringifyArray);
  reset();
}

// Function For Resetting All The Array and Maps
function reset() {
  mainArray = [];
  morningMedicineMap = {};
  noonMedicineMap = {};
  nightMedicineMap = {};
}

// Function For Retrieving Medicine List If there Any
window.onload = () => {
  let getItems = localStorage.getItem("allMedicine");

  if (getItems) {
    let reverseJSON = JSON.parse(getItems);

    reverseJSON.forEach((medicineArray) => {
      //console.log(medicineArray);

      if (medicineArray.morningMedicine) {
        morningMedicineArray = medicineArray.morningMedicine;
      } else if (medicineArray.noonMedicine) {
        noonMedicineArray = medicineArray.noonMedicine;
      } else {
        nightMedicineArray = medicineArray.nightMedicine;
      }
    });
  } else {
    console.log("No Medicine Found");
  }
};

// Function For Logout and Clear Local Storage
function logOut() {
  localStorage.clear();
  location.reload();
}
