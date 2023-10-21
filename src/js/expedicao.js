let c = 1

document.getElementById("btnForm").addEventListener("click", function (event) {
    event.preventDefault();
});

function ManipulandoDados() {
    const codigoRastreio = document.getElementById("codigoRastreio").value
    const previsaoEntrega = document.getElementById("previsaoEntrega").value
    const valorCarga = document.getElementById("valorCarga").value
    const quantidadeCarga = document.getElementById("quantidadeCarga").value
    const cliente = document.getElementById("cliente").value
    const numeroCaminhao = document.getElementById("numeroCaminhao").value
    document.getElementById("codrastreio1").innerHTML = `${codigoRastreio}`;
    document.getElementById("preventrega1").innerHTML = `${previsaoEntrega}`;
    document.getElementById("valorcarga1").innerHTML = `${valorCarga}`;
    document.getElementById("qtdcarga1").innerHTML = `${quantidadeCarga}`;
    document.getElementById("cliente1").innerHTML = `${cliente}`;
    document.getElementById("ncaminhao1").innerHTML = `${numeroCaminhao}`;
    document.getElementById("id1").innerHTML = `${c++}`
}

