
function pegarElemento(name)
{
    return document.getElementsByName(name)[0]
}

function calcularArea()
{
    const input = pegarElemento("i1")
    const areaTerreno = 200
    const areaPermeavel = input.value

    const taxaPermeabilidade = areaPermeavel * 100 / areaTerreno

    pegarElemento("resultado").value=taxaPermeabilidade
}