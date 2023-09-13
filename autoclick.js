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
      const table = document.querySelector(".table.table-bordered");

      const rows = table.getElementsByTagName("tr");

      for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");

        if (cells[1] != undefined) {
          if (cells[1].textContent.trimEnd().trimStart().includes("Sumqayıt şəhəri")) {
            if (cells[6].textContent == "2") {
              if (parseInt(cells[4].textContent) > 8 && parseInt(cells[4].textContent) < 15) {

                console.log('sf ' + cells[4].textContent);
                const button = cells[14].querySelector(".btn.btn-primary");
                if (button) {
                  button.click();
                }
                break;
              }
            }
          }
        }
      }

      /// btn bg-danger btn-md

    }
    if (button) {
      button.click();
    }
  }
}
intervalId = setInterval(clickSearchButton, 1000);

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
