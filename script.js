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

function irParaTaxaOcupacao()
{    
    pegarElementoPeloID("menuPrincipal").style.display = "none";
    pegarElementoPeloID("calcTaxaOcupacao").style.display = "inline";
}

function irParaMenuPrincipal()
{
    pegarElementoPeloID("menuPrincipal").style.display = "inline";
    pegarElementoPeloID("calcAreaPermeavel").style.display = "none";
    pegarElementoPeloID("calcTaxaOcupacao").style.display = "none";

    pegarElemento("inputAreaPermeavel").value = '';
    pegarElemento("inputAreaTerreno1").value = '';
    pegarElemento("resultado").value = '';
    
    pegarElemento("inputTaxaOcupacao").value = '';
    pegarElemento("inputAreaTerreno2").value = '';
    pegarElemento("resultadoTaxaOcupacao").value = '';

    pegarElemento("resultado").style.display = "none";
    pegarElemento("textoResultado").style.display = "none";

    pegarElemento("resultadoTaxaOcupacao").style.display = "none";
    pegarElemento("textoResultadoTaxaOcupacao").style.display = "none";

}

function calcularArea()
{
    const inputAreaPermeavel = pegarElemento("inputAreaPermeavel")
    const inputAreaTerreno1 = pegarElemento("inputAreaTerreno1")    
    const areaTerreno = inputAreaTerreno1.value
    const areaPermeavel = inputAreaPermeavel.value

    const taxaPermeabilidade = areaPermeavel * 100 / areaTerreno

    const inputResultado = pegarElemento("resultado")
    inputResultado.value=taxaPermeabilidade

    pegarElemento("resultado").style.display = "inline";
    pegarElemento("textoResultado").style.display = "inline";
}

function calcularTaxaOcupacao()
{
    const inputTaxaOcupacao = pegarElemento("inputTaxaOcupacao")
    const inputAreaTerreno2 = pegarElemento("inputAreaTerreno2")    
    const areaTerreno = inputAreaTerreno2.value
    const areaConstruidaPavimento = inputTaxaOcupacao.value

    const taxaOcupacao = areaConstruidaPavimento * 100 / areaTerreno

    const inputResultado = pegarElemento("resultadoTaxaOcupacao")
    inputResultado.value=taxaOcupacao

    pegarElemento("resultadoTaxaOcupacao").style.display = "inline";
    pegarElemento("textoResultadoTaxaOcupacao").style.display = "inline";
}

function fazerAoCarregarPagina()
{
    pegarElemento("resultado").style.display = "none";
    pegarElemento("textoResultado").style.display = "none";

    pegarElemento("resultadoTaxaOcupacao").style.display = "none";
    pegarElemento("textoResultadoTaxaOcupacao").style.display = "none";
}


