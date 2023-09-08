let intervalId;
const searchButton = document.getElementById("search");
const button = document.querySelector(".confirm");

function clickSearchButton() {
  if (searchButton) {
    var table = document.getElementById("tableDocuments");
    var tbody = table.querySelector("tbody");
    var tdCount = tbody.querySelectorAll("td").length;

    searchButton.click();
    if (tdCount > 0) {
      clearInterval(intervalId);
      const button = document.querySelector(".confirm");
      if (button) {
        button.click();
      }
      console.log("count > 0");
    }
    if (button) {
      button.click();
    }
  }
}
intervalId = setInterval(clickSearchButton, 2000);

///// close
clearInterval(intervalId);
const button2 = document.querySelector(".confirm");
if (button2) {
  button.click();
}

function changeColor() {
  setTimeout(() => {
    console.log("testttt");
    rows.forEach(function (row) {
      var tds = row.querySelectorAll("td");

      tds[1].style.color = "red"; // Change the color of the third td element
    });
  }, 1000);
}
