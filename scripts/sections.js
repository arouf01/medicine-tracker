document.addEventListener("DOMContentLoaded", () => {
  const section1 = document.querySelector(".section-1");
  const section2 = document.querySelector(".section-2");
  const section3 = document.querySelector(".section-3");
  const addMedicineBtn = document.getElementById("addMedicineBtn");
  const showListBtn = document.getElementById("showList");

  const sections = [section2, section3];

  function hideSections() {
    sections.forEach((section) => {
      section.classList.remove("active");
    });
  }

  addMedicineBtn.addEventListener("click", () => {
    hideSections();
    section2.classList.add("active");
  });

  showListBtn.addEventListener("click", () => {
    hideSections();
    section3.classList.add("active");
  });
});
