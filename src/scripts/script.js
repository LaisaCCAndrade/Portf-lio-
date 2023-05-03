let count = 1;

setInterval(function () {
  document.getElementById("slide" + count).checked = true;
  count++;

  if (count > 10) {
    count = 1;
  }
}, 3000);

(function () {
  const openDialog = document.getElementById("openDialog");
  const closeDialog = document.getElementById("closeDialog");
  const dialog = document.getElementById("quemSou");

  openDialog.addEventListener("click", function () {
    dialog.showModal();
  });

  closeDialog.addEventListener("click", function () {
    dialog.close();
  });
})();
