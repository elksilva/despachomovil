
const selectCargo = document.querySelector('#selectCargo');
const selectEspecialidad = document.querySelector('#selectEspecialidad');
const items = document.querySelectorAll('.oneProfesional');
const paginationWrapper = document.querySelector('#paginationWrapper');
export const cantidadelementos = items.length;
export const itemsXpagina = 9;
let paginaActual = 1, totalpaginas = 0;

////////////////// muestra la cantidad de elementos o cards sengun el numero de pagina //////////////////
function paginate(items, itemsXpagina, paginaActual){
  const start = (parseInt(paginaActual)-1)*itemsXpagina;
  const end = paginaActual*itemsXpagina;
  const elementos = Array.from(items).slice(start, end);
  //items.forEach(item => item.style.display = 'none'); // Ocultar todos los elementos
  elementos.forEach(item => item.style.display = 'block'); // Mostrar los elementos paginados 
}
paginate(items, itemsXpagina, paginaActual);

export const pagination = (attribute)=>{
  if(paginationWrapper){
    totalpaginas = attribute.pages;
    let template =`<li class="contentbtnAnterior"><button class="btnAnterior"> <i class="fa-solid fa-angle-left"></i> Anterior </button></li>`;
    for (let i = 1; i <= attribute.pages; i++) {
      template += `<li class="contentPage"><a href="#" class="page ${i==1?'currentPage':''}" data-nPage="${i}">${i}</a></li>`;
    }
    template += `<li class="contentbtnSiguiente"><button class="btnSiguiente"> Siguiente <i class="fa-solid fa-angle-right"></i> </button></li>`;
    paginationWrapper.innerHTML = template;
  }
}

////////////////////// evento a los botones del paginador ////////////////////////
if(paginationWrapper)
paginationWrapper.addEventListener('click', e=>{
  e.preventDefault();
  if(e.target.classList.contains('page')){
    paginaActual = e.target.textContent;
    items.forEach(item => item.style.display = 'none'); // Ocultar todos los elementos
    paginate(items, itemsXpagina, paginaActual);
    resaltarbtnspaginador(paginaActual);
  }
  if(e.target.classList.contains('btnAnterior')){
    let anterior = paginaActual;
    anterior--;
    if(anterior<1)return;
    paginaActual = anterior;
    items.forEach(item => item.style.display = 'none'); // Ocultar todos los elementos
    paginate(items, itemsXpagina, anterior);
    resaltarbtnspaginador(paginaActual);
  }
  if(e.target.classList.contains('btnSiguiente')){
    let siguiente = paginaActual;
    siguiente++;
    if(siguiente>totalpaginas)return;
    paginaActual = siguiente;
    items.forEach(item => item.style.display = 'none'); // Ocultar todos los elementos
    paginate(items, itemsXpagina, siguiente);
    resaltarbtnspaginador(paginaActual);
  }
});

function resaltarbtnspaginador(pagina){
  const currentPage = document.querySelector('.currentPage');
  if(currentPage)currentPage.classList.remove('currentPage');
  document.querySelector('[data-nPage="'+pagina+'"]').classList.add('currentPage');
}


/////////////////////// fltros ////////////////////////////
if(selectCargo&&selectEspecialidad){
  selectCargo.addEventListener('change', aplicarfiltros);
  selectEspecialidad.addEventListener('change', aplicarfiltros);
}

function aplicarfiltros(){
  const cargoseleccionado = selectCargo.value;
  const especialidadseleccionado = selectEspecialidad.value;

  const proFiltrados = Array.from(items).filter(item => {
    const itemCargo = item.getAttribute('data-cargo');
    const itemEspecialidad = item.getAttribute('data-especialidad');
    return((cargoseleccionado==='todos'||itemCargo===cargoseleccionado)&&(especialidadseleccionado==='todos'||itemEspecialidad===especialidadseleccionado));
  });
  pagination({pages: Math.ceil(proFiltrados.length/itemsXpagina)});
  items.forEach(item => item.style.display = 'none'); // Ocultar todos los elementos
  paginate(proFiltrados, itemsXpagina, 1);
}