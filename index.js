function  GetPeticion(){	
	

var requestOptions = {
  method: 'GET',
 
  redirect: 'follow'
};

fetch("https://nodejsapisiva-production.up.railway.app/empleados/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    }


function  PostPeticion(){	

    nombre = document.getElementById('nombre').value;
    salario = document.getElementById('salario').value;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "nombre": nombre,
      "salario": salario
    });
    console.log(raw)

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://nodejsapisiva-production.up.railway.app/empleados/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}

function  SGetPeticion(){	
	var id = document.getElementById('id').value;
    var url = 'https://nodejsapisiva-production.up.railway.app/' + id;

    var requestOptions = {
      method: 'GET',
     
      redirect: 'follow'
    };
    
    fetch(url, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
        }

function  inicioSession(){	

        mail = document.getElementById('mail').value;
        contrasenia1 = document.getElementById('contrasenia').value;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
            "correo": mail,
            "contrasenia": contrasenia1
        });
        console.log(raw)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        const inicioS = async() => {

            try {
                const tacodepastor = await fetch("https://nodejsapisiva-production.up.railway.app/empleados/inicioSession", requestOptions)
            console.log(tacodepastor.status)
            
            const datos = await tacodepastor.json();
                console.log(datos[0])
            
            var validacion = (tacodepastor.status)

            console.log(validacion)

            if(validacion != '210') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error de Inicio de Sesion',
                    showConfirmButton: false,
                    timer: 1500
                })
            console.log("Algo No funciona elws");
                
            }else{
              localStorage.clear();

              localStorage.setItem('usuario', datos[0].nombre)
              localStorage.setItem('salario', datos[0].salario)

              console.log(localStorage.getItem('usuario'))
              console.log(localStorage.getItem('salario'))

                await Swal.fire({
                    icon: 'success',
                    title: 'Inicio de Sesion exitoso',
                    showConfirmButton: false,
                    timer: 1500
                })
                window.location.href ="Sesion.html"
            }

            } catch (error) {
                console.log("Algo No funciona");
            }

        
        
      }
    inicioS();
 
}
