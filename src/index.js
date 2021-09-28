import "./styles.scss";
import Modal from "./modal";
import Button from "./button";

function handleSelector(selector = null) {
  let selectedElement;
  if (selector) {
    selectedElement = document.querySelector(selector);
  } else {
    selectedElement = document.querySelector('[data-shopify="shpify-button"]');
  }
  return selectedElement;
}

const app = handleSelector();
const modal = new Modal();
const modalButton = new Button("open modal");
app.appendChild(modal.render());
app.appendChild(modalButton.render());

// handle events
const modalOverlay = document.getElementById("modal_overlay");
const modalBtn = document.getElementById("modalButton");
// const closeBtn = document.getElementsByClassName("closeBtn")[0];

function openModal() {
  modalOverlay.style.display = "flex";
}

function closeModal() {
  modalOverlay.style.display = "none";
}

function outsideClick(e) {
  if (e.target == modalOverlay) {
    modalOverlay.style.display = "none";
  }
}

modalBtn.addEventListener("click", openModal);

// closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", outsideClick);

// handle Modal Tabs
const tabButtons = document.querySelectorAll(".modal--tabs__button");
const tabs = document.querySelectorAll(".modal--tab");

tabButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    tabButtons.forEach((button) => {
      button.classList.remove("active");
    });
    e.target.classList.add("active");
    tabs.forEach((tab) => {
      tab.querySelector(".modal--tab__input").classList.remove("active--input");
      if (
        tab.getAttribute("data-tab") === e.target.getAttribute("data-tabButton")
      ) {
        tab.style.display = "block";
        tab.querySelector(".modal--tab__input").classList.add("active--input");
      } else {
        tab
          .querySelector(".modal--tab__input")
          .classList.remove("active--input");
        tab.style.display = "none";
      }
    });
  });
});

const modalForm = document.getElementById("modalForm");
modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(document.querySelector(".active--input").value);
});
