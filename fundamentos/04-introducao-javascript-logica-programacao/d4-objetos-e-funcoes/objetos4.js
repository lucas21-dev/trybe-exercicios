let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
info['recorrente'] = 'Sim'

for (let index in info) {
    console.log(info[index])
}