let count = 1;

setInterval(function () {
  document.getElementById("slide" + count).checked = true;
  count++;

  if (count > 10) {
    count = 1;
  }
}, 3000);
