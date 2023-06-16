
function pegarElemento(name)
{
    return document.getElementsByName(name)[0]
}

function pegarElementoPeloID(id)
{
    return document.getElementById(id)
}

function irParaAreaPermeavel()
{    
    pegarElementoPeloID("menuPrincipal").style.display = "none";
    pegarElementoPeloID("calcAreaPermeavel").style.display = "inline";
}

function irParaMenuPrincipal()
{
    pegarElementoPeloID("menuPrincipal").style.display = "inline";
    pegarElementoPeloID("calcAreaPermeavel").style.display = "none";
}

function calcularArea()
{
    const input1 = pegarElemento("i1")
    const input2 = pegarElemento("i2")
    const areaTerreno = input2.value
    const areaPermeavel = input1.value

    const taxaPermeabilidade = areaPermeavel * 100 / areaTerreno

    pegarElemento("resultado").value=taxaPermeabilidade

    pegarElemento("resultado").style.display = "inline";
    pegarElemento("textoResultado").style.display = "inline";
}

function fazerAoCarregarPagina()
{
    pegarElemento("resultado").style.display = "none";
    pegarElemento("textoResultado").style.display = "none";
}


