document.getElementById("lumen-method").addEventListener("submit", computeResults);

function computeResults(e) {

  const StringE = document.querySelector("#StringE").value;
  const StringL = document.querySelector("#StringL").value;
  const StringW = document.querySelector("#StringW").value;
  const StringF = document.querySelector("#StringF").value;

  if (StringE > 0 && StringL > 0 && StringW > 0 && StringF > 0) {

    const NumberE = parseFloat(StringE);
    const NumberL = parseFloat(StringL);
    const NumberW = parseFloat(StringW);
    const NumberF = parseFloat(StringF);
    const NumberU = 0.55;
    const NumberM = 0.65;
    
    const NumberN = NumberE * (NumberL * NumberW) / (NumberF * NumberU * NumberM);
    const StringNtofixed = NumberN.toFixed(2);

    document.querySelector("#StringN").innerHTML = StringNtofixed;

  } else {
    alert("請輸入正確數值！")
  }

  e.preventDefault();
}