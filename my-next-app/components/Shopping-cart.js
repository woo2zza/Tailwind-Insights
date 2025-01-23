import { dictionary } from "./dictionary.js";

function addItemToList(name, num) {
  const cartItemList = document.getElementById("cart-item-list");
  const item = document.createElement("li");
  item.textContent = dictionary[name] + ": " + num + "개";
  cartItemList.append(item);
}

function createCartItemList() {
  const cartItems = JSON.parse(sessionStorage.getItem("cart-items"));

  for (const [key, value] of Object.entries(cartItems)) {
    addItemToList(key, value);
  }
}

function setInitialValues() {
  createCartItemList();
}

function setEventListeners() {
  const orderButton = document.querySelector("#order-btn");
  orderButton.addEventListener("click", () => {
    alert("주문이 완료되었습니다!");
    sessionStorage.clear();
    window.location.href = "/session-storage-example-new/";
  });
}

setInitialValues();
setEventListeners();
