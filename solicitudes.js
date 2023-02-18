const usuarioActivo = localStorage.getItem('usuario')
var usuario = document.getElementById("nombreusuario")
usuario.innerHTML = usuarioActivo;

function Calculadora() { 
            
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    const montonMaximo = localStorage.getItem('salario')
    const montoSolicitado  = document.getElementById('monto').value;
    const plazos = document.getElementById('plazos').value;
    const tasa = document.getElementById('tasa').value;
    url = ("http://sivaweb.mx/CalculadoraSIVA/Calcula?MontoSolicitado="+ montoSolicitado + "&Plasos="+ plazos + "&TipoTasa="+tasa+"&TasaAnual=25.0")
    console.log(url)
      const pambazo = async() =>{
       
      try {

        const suadero = await fetch(url, requestOptions)
       
          const datos = await suadero.json();

          console.log(datos[0])

          console.log(datos[0].tablaCLS[5])

          const indice =  datos[0].tablaCLS.length;
            console.log(indice)
          
            var montosolicitado = document.getElementById("montosolicitado")
            montosolicitado.innerHTML = datos[0].montoCreditoCLS;
            var plzos = document.getElementById("plzos")
            plzos.innerHTML = datos[0].plasosCLS;
            var pplzos = document.getElementById("pplzos")
            pplzos.innerHTML = datos[0].pagoCLS;
            var totalapagar = document.getElementById("totalapagar")
            totalapagar.innerHTML = datos[0].montoTotalApagarCLS;




            var body = document.getElementById("tablitacon");

            
            // Crea un elemento <table> y un elemento <tbody>
            var tabla   = document.createElement("table");
            var tblBody = document.createElement("tbody");
            
            // Crea las celdas
            
            for (var i = 0; i < indice; i++) {
              // Crea las hileras de la tabla
              var hilera = document.createElement("tr");

              var celda = document.createElement("td");
              
                for (var j = 0; j < 1; j++) {
                  // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                  // texto sea el contenido de <td>, ubica el elemento <td> al final
                  // de la hilera de la tabla
                  var celda = document.createElement("td");
                  var textoCelda = document.createTextNode(
                   "Num. de Pago "+datos[0].tablaCLS[i].clsnPagos);
                  var celda1 = document.createElement("td");
                  var textoCelda1 = document.createTextNode(
                   "Amortización "+datos[0].tablaCLS[i].clsAmortizacion);
                  var celda2 = document.createElement("td");
                  var textoCelda2 = document.createTextNode(
                    "Intereses "+datos[0].tablaCLS[i].clsivAinteres);
                  var celda3 = document.createElement("td");
                  var textoCelda3 = document.createTextNode(
                   "Saldo a pagar "+datos[0].tablaCLS[i].clsSaldo);
                   var celda4 = document.createElement("td");
                   var textoCelda4 = document.createTextNode(
                    "Pago por plazos "+datos[0].tablaCLS[i].clsPago);
                  
                  celda.appendChild(textoCelda);
                  hilera.appendChild(celda);
                  celda1.appendChild(textoCelda1);
                  hilera.appendChild(celda1);
                  celda4.appendChild(textoCelda4);
                  hilera.appendChild(celda4);
                  celda2.appendChild(textoCelda2);
                  hilera.appendChild(celda2);
                  celda3.appendChild(textoCelda3);
                  hilera.appendChild(celda3);
              }
            
              // agrega la hilera al final de la tabla (al final del elemento tblbody)
              tblBody.appendChild(hilera);
            }

            // posiciona el <tbody> debajo del elemento <table>
            //tabla.appendChild(hileracabecera)
            tabla.appendChild(tblBody);
            // appends <table> into <body>
            body.appendChild(tabla);
            // modifica el atributo "border" de la tabla y lo fija a "2";
            tabla.setAttribute("border", "1");
            header.setAttribute("border", "1");
          
            await Swal.fire({
              icon: 'success',
              title: 'Cotización exitosa revise su tabla de amortización',
              showConfirmButton: false,
              timer: 2500
          })

      }catch (error) {
      console.log(error)
     } 
    }
    pambazo();
}



