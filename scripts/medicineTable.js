// Declaring Array
let morningMedicineArray = [];
let noonMedicineArray = [];
let nightMedicineArray = [];

// Function For Showing Data in Table
function viewMedicineList() {
  // Default Table Row
  document.querySelector("table>tbody").innerHTML = `<tr><td></td></tr>`;

  // Getting Current Time
  let currentTime = new Date();
  let getHours = currentTime.getHours();
  //console.log(getHours);

  // Checking Time and On Condition Call The Medicine Function
  if (getHours >= 5 && getHours <= 11) {
    generateMedicine(morningMedicineArray);
  } else if (getHours >= 12 && getHours <= 17) {
    generateMedicine(noonMedicineArray);
  } else if (getHours >= 18 && getHours <= 24) {
    generateMedicine(nightMedicineArray);
  }

  // Generate Medicine Function
  function generateMedicine(medicineList) {
    let getTbody = document.querySelector("table>tbody");
    for (let i = 0; i < medicineList.length; i++) {
      let allMed = medicineList[i];
      let tableRow = `<tr>`;
      for (let j = 0; j < allMed.length; j++) {
        //console.log(allMed[j]);
        let med = allMed[j];
        tableRow += `<td>${med}</td>`;
        //console.log(createTable);
      }
      tableRow += `</tr>`;
      getTbody.innerHTML += tableRow;
    }
  }

  // Counting All Medicine
  let rows = document.querySelectorAll("tbody tr");
  let totalMedicine = 0;
  for (let i = 0; i < rows.length; i++) {
    let quantityCell = rows[i].cells[2];

    if (quantityCell) {
      let getTextContent = quantityCell.textContent.trim();
      let convertToFLoat = parseFloat(getTextContent);
      totalMedicine += convertToFLoat;
    }
  }
  document.getElementById("totalQuantity").innerText = totalMedicine;
}
