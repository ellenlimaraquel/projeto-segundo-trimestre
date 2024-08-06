 export function aleatorio(lista){
    const posiçao = Math.floor(Math.random()* lista.length);
    return lista[posiçao];
}
