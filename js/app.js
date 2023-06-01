
const form= document.querySelector('#formulario');
const inputs = document.querySelectorAll(".contact-input");

if(form.dataset.ipt=="Modificar"){
  inputs.forEach((ipt) => {
    ipt.parentNode.classList.add("not-empty");
    ipt.addEventListener("focus", () => {
      ipt.parentNode.classList.add("focus");
      ipt.parentNode.classList.add("not-empty");
    });
    ipt.addEventListener("blur", () => {
      ipt.parentNode.classList.add("not-empty");
      if (ipt.value == "") {
        ipt.parentNode.classList.remove("not-empty");
      }
      ipt.parentNode.classList.remove("focus");
    });
  });
}else{
  inputs.forEach((ipt) => {
    ipt.addEventListener("focus", () => {
      ipt.parentNode.classList.add("focus");
      ipt.parentNode.classList.add("not-empty");
    });
    ipt.addEventListener("blur", () => {
      ipt.parentNode.classList.add("not-empty");
      if (ipt.value == "") {
        ipt.parentNode.classList.remove("not-empty");
      }
      ipt.parentNode.classList.remove("focus");
    });
  });
}
  
