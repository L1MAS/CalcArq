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

function irParaCAproveitamento()
{    
    pegarElementoPeloID("menuPrincipal").style.display = "none";
    pegarElementoPeloID("calcCAproveitamento").style.display = "inline";
}

function irParaMenuPrincipal()
{
    pegarElementoPeloID("menuPrincipal").style.display = "inline";
    pegarElementoPeloID("calcAreaPermeavel").style.display = "none";
    pegarElementoPeloID("calcTaxaOcupacao").style.display = "none";
    pegarElementoPeloID("calcAComputavel").style.display = "none";

    pegarElemento("inputAreaPermeavel").value = '';
    pegarElemento("inputAreaTerreno1").value = '';
    pegarElemento("resultado").value = '';
    pegarElemento("resultado").style.display = "none";
    pegarElemento("textoResultado").style.display = "none";

    pegarElemento("inputTaxaOcupacao").value = '';
    pegarElemento("inputAreaTerreno2").value = '';
    pegarElemento("resultadoTaxaOcupacao").value = '';
    pegarElemento("resultadoTaxaOcupacao").style.display = "none";
    pegarElemento("textoResultadoTaxaOcupacao").style.display = "none";

    pegarElemento("inputCAproveitamento").value = '';
    pegarElemento("inputAreaTerreno3").value = '';
    pegarElemento("resultadoCAproveitamento").value = '';
    pegarElemento("resultadoCAproveitamento").style.display = "none";
    pegarElemento("textoResultadoCAproveitamento").style.display = "none";

}

function calcularArea()
{
    const inputAreaPermeavel = pegarElemento("inputAreaPermeavel")
    const inputAreaTerreno1 = pegarElemento("inputAreaTerreno1")    
    const areaTerreno = inputAreaTerreno1.value
    const areaPermeavel = inputAreaPermeavel.value

    const taxaPermeabilidade = areaPermeavel * 100 / areaTerreno

    const inputResultado = pegarElemento("resultado")
    inputResultado.value=taxaPermeabilidade.toFixed(2)

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
    inputResultado.value=taxaOcupacao.toFixed(2)

    pegarElemento("resultadoTaxaOcupacao").style.display = "inline";
    pegarElemento("textoResultadoTaxaOcupacao").style.display = "inline";
}

function calcularCAproveitamento()
{
    const inputCAproveitamento = pegarElemento("inputAComputavel")
    const inputAreaTerreno3 = pegarElemento("inputAreaTerreno3")    
    const areaTerreno = inputAreaTerreno3.value
    const areaComputavel = inputCAproveitamento.value

    const CAproveitamento = areaComputavel / areaTerreno

    const inputResultado = pegarElemento("resultadoCAproveitamento")
    inputResultado.value=CAproveitamento.toFixed(2)

    pegarElemento("resultadoCAproveitamento").style.display = "inline";
    pegarElemento("textoResultadoCAproveitamento").style.display = "inline";
}

function fazerAoCarregarPagina()
{
    pegarElemento("resultado").style.display = "none";
    pegarElemento("textoResultado").style.display = "none";

    pegarElemento("resultadoTaxaOcupacao").style.display = "none";
    pegarElemento("textoResultadoTaxaOcupacao").style.display = "none";

    pegarElemento("resultadoCAproveitamento").style.display = "none";
    pegarElemento("textoResultadoCAproveitamento").style.display = "none";
}


