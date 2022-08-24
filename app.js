document.getElementById("lumen-method").addEventListener("submit", computeResults);

function computeResults(e) {

  const stringE = document.getElementById("stringE").value;
  const stringL = document.getElementById("stringL").value;
  const stringW = document.getElementById("stringW").value;
  const stringF = document.getElementById("stringF").value;

  if (stringE > 0 && stringL > 0 && stringW > 0 && stringF > 0) {

    const numberE = parseFloat(stringE);
    const numberL = parseFloat(stringL);
    const numberW = parseFloat(stringW);
    const numberF = parseFloat(stringF);
    const numberU = 0.55;
    const numberM = 0.65;
    
    const numberN = numberE * (numberL * numberW) / (numberF * numberU * numberM);
    const stringNtoFixed = numberN.toFixed(2);

    document.getElementById("stringN").innerHTML = stringNtoFixed;

  } else {
    alert("請輸入正確數值！")
  }

  e.preventDefault();
}