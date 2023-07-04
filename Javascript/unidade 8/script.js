function Hero (nome, armadura, forca, ataque) {
    this.nome = nome
    this.armadura = armadura
    this.forca = forca
    this.ataque = ataque
}

let soldado = new Hero('Soldado', '5', '5', '5')
let feiticeiro = new Hero('Feiticeiro','7','7','7')
let arqueiro = new Hero('Arqueiro','9','9','9')

for (let x in soldado) {  // Loop "for" para reduzir o codigo
    document.write(`${x}: ${soldado[x]} <br>`)
}


let personagem = arqueiro  // codigo sem o Loop "for"

document.write('<h2>' +personagem.nome + ' Propriedades' + '</h2>' + '<br>')
document.write('Armadura: ' +personagem.armadura + '<br>')
document.write(`Força: ${personagem.forca} <br>`)
document.write(`Ataque: ${personagem.ataque} <br>`)
