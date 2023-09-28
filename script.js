 // Escucha el evento de envío del formulario
 document.getElementById("miForm").addEventListener("submit", e => {
    e.preventDefault(); 

    // Guardo los datos del formulario en un objeto
    const formData = {
      nombre: document.getElementById("name").value,
      apellido: document.getElementById("apellido").value,
      fecha: document.getElementById("birthDate").value
    };

    // Solicitud POST 
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(formData), //Convierte en Json la info del formulario
      headers: {"Content-Type": "application/json; charset=UTF-8"},
    })
      .then(res => res.json())
      .then(data => {
        console.log("Respuesta del servidor:", data);
        alert("Enviado con éxito!")
      })
      .catch(error => {
        console.error("Error en la solicitud:", error);
      });
  });