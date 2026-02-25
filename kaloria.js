document.getElementById("calorieForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const gender = document.getElementById("gender").value;
  const age = Number(document.getElementById("age").value);
  const height = Number(document.getElementById("height").value);
  const weight = Number(document.getElementById("weight").value);
  const activity = Number(document.getElementById("activity").value);
  const resultBox = document.getElementById("result");


  if (
    !gender ||
    age < 1 || age > 100 ||
    height < 50 || height > 250 ||
    weight < 20 || weight > 300
  ) {
    resultBox.innerHTML = `
      <p style="color:red;font-weight:bold;">
        Kérlek, valós adatokat adj meg minden mezőben!
      </p>
    `;
    resultBox.style.display = "block";
    return;
  }


  let bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const calories = Math.round(bmr * activity);


  resultBox.innerHTML = `
    <h3>Napi kalóriaszükségleted:</h3>
    <p><strong>${calories} kcal</strong></p>
    <small>Ez az érték a testsúlyod megtartásához szükséges.</small>
  `;
  resultBox.style.display = "block";
});