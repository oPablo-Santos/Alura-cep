async function buscaEndereco(cep) {
  var mensagemErro = document.getElementById("erro");
  mensagemErro.innerHTML = "";
  try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCEP2 = await consultaCEP.json();
    if (consultaCEP2.erro) {
      throw Error("CEP não existe!");
    }
    var cidade = document.getElementById("cidade");
    var logradouro = document.getElementById("endereco");
    var estado = document.getElementById("estado");
    var bairro = document.getElementById("bairro");

    cidade.value = consultaCEP2.localidade;
    logradouro.value = consultaCEP2.logradouro;
    estado.value = consultaCEP2.uf;
    bairro.value = consultaCEP2.bairro;

    console.log(consultaCEP2);
    return consultaCEP2;
  } catch (erro) {
    mensagemErro.innerHTML = `<p> Cep não encontrado - Tente novamente </p>`;
    console.log(erro);
  }
}

var cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
