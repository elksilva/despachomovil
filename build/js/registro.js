export const tiporegistros=document.querySelectorAll(".tiporegistro");const btnsvolver=document.querySelectorAll(".volver");tiporegistros.forEach((o,e)=>{o.addEventListener("click",o=>{if(document.querySelector(".btns-formularios").style="display: none;",document.querySelector(".col2").style="backGround-color: white;",0===e){document.querySelector("#form-abogadoContadores").classList.add("mostrarformulario")}if(1===e){document.querySelector("#form-empresas").classList.add("mostrarformulario")}})}),btnsvolver.forEach(o=>{o.addEventListener("click",o=>{document.querySelector(".mostrarformulario").classList.remove("mostrarformulario"),document.querySelector(".btns-formularios").style="display: flex;",document.querySelector(".col2").style="backGround-color: none;"})});