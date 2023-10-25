const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, index){
    console.log(`${index}. ${nome}`)
}

fabricantes.forEach(imprimir)