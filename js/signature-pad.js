const canvas = document.querySelector("canvas");
const clearButton = document.getElementById("clear");
const signaturePad = new SignaturePad(canvas, {
  backgroundColor: "rgb(255,255,255)",
});

const clearSignaturePad = clearButton.addEventListener("click", clearSignature);
function clearSignature() {
  signaturePad.clear();
}
