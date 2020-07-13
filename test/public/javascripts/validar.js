function validar(){
    
    var name = document.getElementById("nombre").value;
    var lastname = document.getElementById("apellidos").value;
    var email = document.getElementById("correo").value;
    var user = document.getElementById("usuario").value;
    var pass = document.getElementById("pass").value;
    var phone = document.getElementById("telefono").value;

    

    if (name === "" || name.length >30 || /^\s+$/.test(name)){
        alert("Debe escribir su Nombre");
        return false;
    }
    
    else if (lastname === "" || lastname.length>80 || /^\s+$/.test(lastname)){
        alert("Debe escribir su Apellido");
        return false;
    }
    
    if(!(/\S+@\S+\.\S+/.test(email)) || email.length>100 ){
        alert('Debe escribir un Email valido');
        return false;
      }
    
    else if (user === "" || user.length>20 || /^\s+$/.test(user)){
        alert("Debe escribir un Usuario valido");
        return false;
    }
    
    else if (pass === ""){
        alert("Debe escribir su Password");
        return false;
    }

    else if(phone == null || phone.length == 0 || isNaN(phone) || /^\s+$/.test(phone) || phone.length>15){
        alert(' Debe ingresar un numero valido');
        return false;
    }
       
    
alert(` Muchas Gracias por su registro Sr(A) ${nombre}  ${lastname} \n -Email: ${email}\n -Usuario: ${user}\n -Password: ${pass}\n -Telefono: ${phone}` );
}

