
function pegarElemento(name)
{
    return document.getElementsByName(name)[0]
}

function calcularArea()
{
    const input1 = pegarElemento("i1")
    const input2 = pegarElemento("i2")
    const areaTerreno = input2.value
    const areaPermeavel = input1.value

    const taxaPermeabilidade = areaPermeavel * 100 / areaTerreno

    pegarElemento("resultado").value=taxaPermeabilidade
}