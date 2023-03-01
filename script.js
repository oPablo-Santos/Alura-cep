async function buscaEndereco(cep) {
  try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCEP2 = await consultaCEP.json();
    if (consultaCEP2.erro) {
      throw Error("CEP não existe!");
    }
    console.log(consultaCEP2);
    return consultaCEP2;
  } catch (erro) {
    console.log(erro);
  }
}

let ceps = ["02993310", "01001000"];
let conjuntoCeps = ceps.map((valores) => buscaEndereco(valores));
console.log(conjuntoCeps);
Promise.all(conjuntoCeps).then((respostas) => console.log(respostas));


