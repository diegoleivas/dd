var  ColeccionDiscos =[
  {  "id":7853,
     "titulo":"El amordepues del Amor",
     "Artista":"Fito Paez",
     "Canciones":["el amor despues del Amor","Brillante sobre el mic", "te vi"]
  },  
  
  {
      "id":7854,
      "titulo":"la era de la boludez ",
      "Artista":"Divididos",
    
      
      
      
  }
    
    
];
    
    
function VerificaPropiedad(obj,pos,propiedad,valor) {
    if(obj[pos].hasOwnProperty(propiedad)){
                                
       var mensaje = "la propiedad existe" ;
       alert(mensaje);
    }
       
    else {
        
      obj[pos][propiedad]=[];
      obj[pos][propiedad].push(valor);
      

       }
}

console.log(VerificaPropiedad(ColeccionDiscos,"1","Canciones","s"));
console.log(ColeccionDiscos);


    
 
 
 
