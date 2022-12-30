const listenInput = document.querySelector("#textEncrypt");
document.querySelector("#textEncryptHidden").style.display = "none";
document.querySelector("#positionRelartiva").style.display = "block";

document.querySelector("#btnEncrypt").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#textEncryptHidden").style.display = "block";
  document.querySelector("#positionRelartiva").style.display = "none";
  let resultText = document.querySelector("#textEncrypt").value;
  console.log(String(document.querySelector("#textEncrypt").value).trim());
  console.log(
    /^([a-z])+([a-z])$/g.test(
      String(document.querySelector("#textEncrypt").value).trim()
    )
  );
  if (
    !/^([a-z])+([a-z])$/g.test(
      String(document.querySelector("#textEncrypt").value).trim()
    )
  ) {
    document.querySelector("#textEncryptHidden").style.display = "none";
    document.querySelector("#positionRelartiva").style.display = "block";
    return (document.querySelector("#verify").className = "red");
  }
  document.querySelector("#textEncryptResult").innerHTML = resultText
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
});

document.querySelector("#btnDesEncrypt").addEventListener("click", (e) => {
  e.preventDefault();
  let resultText = document.querySelector("#textEncrypt").value;
  document.querySelector("#textEncryptResult").innerHTML = resultText
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
});

document.querySelector("#bntmCopy").addEventListener("click", (e) => {
  e.preventDefault();
  copyText();
});

function copyText() {
  // Selecciona el elemento de texto
  var text = document.querySelector("#textEncryptResult");

  // Selecciona todo el texto del elemento
  var selection = window.getSelection();
  var range = document.createRange();
  range.selectNodeContents(text);
  selection.removeAllRanges();
  selection.addRange(range);

  // Copia el texto seleccionado al portapapeles
  document.execCommand("copy");
}
