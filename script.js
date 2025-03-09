document.querySelector("#submit").addEventListener("click", getEntryObj);

function getEntryObj() {
  const data = {
    value: parseInt(document.querySelector("#entry-number").value),
    from_unit: document.querySelector("#from-units-dropdown").value,
    to_unit: document.querySelector("#to-units-dropdown").value,
  };

  console.log(data);
  const targetUnit = document.querySelector("#to-units-dropdown").value;
  fetch("https://main-unit-converter.liara.run/convert/", {
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
  document.querySelector("#conversion-result").value = data.result;
  document.querySelector("#target-unit").value = unit;
}
