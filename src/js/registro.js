export const tiporegistros = document.querySelectorAll('.tiporegistro');
const btnsvolver = document.querySelectorAll('.volver');

if(tiporegistros){
  tiporegistros.forEach((Element, index)=>{
    Element.addEventListener('click', (e)=>{
      document.querySelector('.btns-formularios').style = "display: none;";
      document.querySelector('.col2').style = "backGround-color: white;";
      if(index === 0){
        const formabogadoContadores = document.querySelector('#form-abogadoContadores');
        formabogadoContadores.classList.add('mostrarformulario');
      }
      if(index === 1){
        const formempresas = document.querySelector('#form-empresas');
        formempresas.classList.add('mostrarformulario');
      }
    });
  });
}

if(btnsvolver){
  btnsvolver.forEach(Element =>{
    Element.addEventListener('click', (e)=>{
      document.querySelector('.mostrarformulario').classList.remove('mostrarformulario');
      document.querySelector('.btns-formularios').style = "display: flex;";
      document.querySelector('.col2').style = "backGround-color: none;";
    })
  });
}

