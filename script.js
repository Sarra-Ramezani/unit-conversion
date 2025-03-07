document.querySelector("#submit").addEventListener("click", getEntryObj);

function getEntryObj() {
  const data = {
    value: parseInt(document.querySelector("#entry-number").value),
    Kilograms: document.querySelector("#units-dropdown").value,
  };

  console.log(data);
  const targetUnit = document.querySelector("#units-dropdown").value;
  fetch("https://unit-converter.liara.run/convert-grams/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      showResult(data, targetUnit);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function showResult(data, unit) {
  if (unit === "kilograms") {
    document.querySelector("#conversion-result").value = data.kilograms;
  } else if (unit === "tons") {
    document.querySelector("#conversion-result").value = data.tons;
  }
  document.querySelector("#target-unit").value = unit;
}
