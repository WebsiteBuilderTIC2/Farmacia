console.log("Starting....")

//Bloq import




//Bloq variables y constantes



//Bloq Funciones

const listaMedicamentos = (resultado) =>{

    resultado.forEach((articulo) =>{
        //Destructuring
        const {id, nombre, descripcion, precio, imagen } = articulo;
        const {url} = imagen;
        const contenedorImagen = document.querySelector(".listado");

        contenedorImagen.innerHTML += `
        <div class="listado-Medicamentos">
        <img layout='responsive' width="100" height="220" src="${url}" alt="${nombre}">
            
            <div class="listado-contenido">
                <h3>${nombre}</h3>
                <p class="listado-descripcion">${descripcion}</p>
                <p class="listado-precio">$${precio}</p>
                <a data-guitarra="${id}" class="listado-enlace" href="guitarra.html?id=${id}">
                    Ver Producto
                </a>
            </div>
        </div>
    `;
     });

};




//Asyncronos
const consultarApi = async () =>{

    //try sirve para capturar la informacion
    try{
    //el await sirve para que no se ejecute otra funcion hasta que se complete la actual (respuesta por ejemplo)
        const respuesta = await fetch("https://whispering-wildwood-03076.herokuapp.com/guitarras/");

        const resultado = await respuesta.json();


        listaMedicamentos(resultado);

    }catch (error) {
        console.log("error: " + error.message)
    }

}



//Bloq Progama Principal


consultarApi();