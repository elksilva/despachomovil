//document.addEventListener('DOMContentLoaded', function(){ iniciarapp(); });
import { pagination, itemsXpagina, cantidadelementos } from "./profesionales.js";
import { tiporegistros } from "./registro.js";

const configpagination = {
    pages: Math.ceil(cantidadelementos/itemsXpagina),
}

pagination(configpagination);



/*function iniciarapp(){
    console.log(1);    
}*/

