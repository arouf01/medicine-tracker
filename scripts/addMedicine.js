// Add Medicine Function
let currentArray = [];
function addNewMedicine() {
  document.getElementById("formMedAdd").addEventListener("click", function (e) {
    e.preventDefault();
  });
  let allData = document.querySelectorAll("form>input");
  // All Data Pushing
  allData.forEach((data) => {
    currentArray.push(data.value);
  });

  let beforeAfterValue = document.getElementById("medicineBeforeAfter").value;
  currentArray.push(beforeAfterValue);

  // Get Medicine Taken Time
  let medicineTakenTime = document.getElementById("medicineTakenTime").value;

  // Putting In To The Main Array Based on Condition
  if (medicineTakenTime == "Morning") {
    morningMedicineArray.push(currentArray);
  } else if (medicineTakenTime == "Noon") {
    noonMedicineArray.push(currentArray);
  } else {
    nightMedicineArray.push(currentArray);
  }

  // Resetting The Array
  currentArray = [];

  document.getElementById("formMedAdd").reset();
}
