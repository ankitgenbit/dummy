const items = document.querySelectorAll(".item");
const popup = document.getElementById("popup");
const popupHeading = document.getElementById("popup-heading");
const popupDescription = document.getElementById("popup-description");
const popupNumber = document.getElementById("popup-number");
const popupBoolean = document.getElementById("popup-boolean");
const closeBtn = document.querySelector(".close");

items.forEach((item) => {
  item.addEventListener("click", () => {
    const heading = item.querySelector("h2").innerText;
    const description = item.querySelector("p").innerText;
    const number = item.querySelector('input[type="number"]').value;
    const boolean = item.querySelector('input[type="checkbox"]').checked;

    popupHeading.innerText = heading;
    popupDescription.innerText = description;
    popupNumber.value = number;
    popupBoolean.checked = boolean;

    popup.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});
