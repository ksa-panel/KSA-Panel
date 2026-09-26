function filterProducts(category, button) {

  document
    .querySelectorAll('.categories button')
    .forEach(b => b.classList.remove('active'));

  button.classList.add('active');

  document
    .querySelectorAll('.product')
    .forEach(product => {

      if (
        category === 'ALL' ||
        product.dataset.category === category
      ) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }

    });
}


function openOrder(product, price) {

  document.getElementById("selectedProduct").innerHTML =
    "<b>" + product + "</b><br>মূল্য: ৳" + price;

  document.getElementById("orderModal").style.display = "flex";
}


function closeOrder() {

  document.getElementById("orderModal").style.display = "none";
}


function submitPayment() {

  let trx = document
    .getElementById("trx")
    .value
    .trim();

  if (!trx) {
    alert("Transaction ID দিন।");
    return;
  }

  document.getElementById("success").style.display = "block";
}


function confirmOrder() {

  let trx = document
    .getElementById("modalTrx")
    .value
    .trim();

  if (!trx) {
    alert("Transaction ID দিন।");
    return;
  }

  document.getElementById("modalSuccess").style.display = "block";
}


window.onclick = function(event) {

  const modal = document.getElementById("orderModal");

  if (event.target === modal) {
    closeOrder();
  }

};