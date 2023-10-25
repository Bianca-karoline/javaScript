function fabrica(nome, preco){
    return {
        nome,
        preco
    }
}

let lista = []

lista.push(fabrica("sla", 12))
lista.push(fabrica("sla2", 1.1))
console.log(lista)