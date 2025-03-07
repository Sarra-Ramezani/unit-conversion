// document.querySelector("#submit").addEventListener("click", getEntryObj);

function getEntryObj() {
  const data = {
    num: parseInt(document.querySelector("#entry-number").value),
    unit: document.querySelector("#units-dropdown").value,
  };

  console.log(data);
  const targetUnit = document.querySelector("#units-dropdown").value;
  fetch("https://unit-converter.liara.run/convert/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  console.log(data.success);
}

function showResult(result, unit) {
  document.querySelector("#conversion-result").value = result;
  document.querySelector("#target-unit").value = unit;
}
