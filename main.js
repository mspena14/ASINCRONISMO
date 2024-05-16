/* console.log("uno")
console.log("dos")
setTimeout(() => {//Funcioón encargada de pasar el proceso a un segundo plano asignandole un tiempo en el cual se ejecute lo que haya dentro.
    alert("Hola mundo!")
}, 10000);
console.log("tres")
console.log("cuatro")
console.log("cinco")
 */

/* async function llamadoAUnaAPISpaceX() {
    const respuesta = await fetch(`https://api.spacexdata.com/v3/launches`)//Endpoints  API SPACEX
    console.log(respuesta)
    const data = await respuesta.json()
    console.log(data)
}

llamadoAUnaAPISpaceX()
 */


/* async function llamadoAUnaAPIRickAndMorty() {
    const respuesta = await fetch(`https://rickandmortyapi.com/api/character`)//Endpoints  API SPACEX
    console.log(respuesta)
    const data = await respuesta.json()
    console.log(data)
}

llamadoAUnaAPIRickAndMorty() */
const main = document.querySelector('main')
const tHead = document.querySelector('thead')
const tBody = document.querySelector('tbody')
const btnEnviar = document.getElementById('btn-enviar')
const btnEliminar = document.getElementById('btn-eliminar')


async function llamadoAUnaAPIFakePlazi() {
    const respuesta = await fetch(`https://api.escuelajs.co/api/v1/categories`)//Endpoints  API SPACEX
    const data = await respuesta.json()
    console.log(data)
    data.forEach(datos => {
        tBody.innerHTML += `
        <tr>
        <th scope="row">${datos.id}</th>
        <td>${datos.name}</td>
        <td>
        <img src="${datos.image}" alt="${datos.name}" width="200px">
        </td>
        <td>${datos.creationAt}</td>
        <td>${datos.updatedAt}</td>
      </tr>
      <tr>
        `
    })
/*     data.forEach(dato => {
        for (const key in dato) {
            if (dato.hasOwnProperty.call(dato, key)) {
                const element = dato[key]
                console.log(key)
            }
        }
    }) */
}

const datos = (llamadoAUnaAPIFakePlazi())
console.log(datos)

const newCategory = {
    name: 'cuchau',
    image: 'https://m.media-amazon.com/images/I/71afYid4c5L._AC_SX679_.jpghttps://m.media-amazon.com/images/I/71afYid4c5L._AC_SX679_.jpg'
}

function enviarDatosALaAPI() {
    fetch(`https://api.escuelajs.co/api/v1/categories`, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(newCategory)
    })
    
}

async function eliminar() {
    let id = prompt("Are you sure you want to delete")
    await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`,{
    method: "DELETE",
    headers: {
        "content-type": "application/json"
    }
    })
    location.reload()
}

btnEnviar.addEventListener("click", enviarDatosALaAPI)
btnEliminar.addEventListener("click", eliminar)


