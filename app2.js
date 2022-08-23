document.getElementById("lumen-method").addEventListener("submit", computeResults);

function computeResults(e) {

  let NumberE = document.querySelector("#NumberE").value;
  let NumberL = document.querySelector("#NumberL").value;
  let NumberW = document.querySelector("#NumberW").value;
  let NumberF = document.querySelector("#NumberF").value;

  if (NumberE > 0 && NumberL > 0 && NumberW > 0 && NumberF > 0) {

    const NumberEfloat = parseFloat(NumberE);
    const NumberLfloat = parseFloat(NumberL);
    const NumberWfloat = parseFloat(NumberW);
    const NumberFfloat = parseFloat(NumberF);
    const NumberUfloat = 0.55;
    const NumberMfloat = 0.65;

    const NumberNfloat = NumberEfloat * (NumberLfloat * NumberWfloat) / (NumberFfloat * NumberUfloat * NumberMfloat);
    const NumberNtofixed = NumberNfloat.toFixed(2);

    document.querySelector("#NumberN").innerHTML = NumberNtofixed;

  } else {
    alert("請輸入正確數值！")
  }

  e.preventDefault();
}