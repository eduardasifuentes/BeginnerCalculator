const resultado = document.querySelector('#result')
const equal = document.querySelector('#equalButton')

function insert(valor) {
  resultado.innerHTML += valor
  // quando algum botão com a função insert for ativado a gente vai inserir o valor dentro da tag p no html
}

function clean() {
  resultado.innerHTML = ''
  //faz o campo result receber nada, ou seja apaga tudo que estava nele
}

function backspace() {
  if (result.textContent) {
    /*se oq tiver dentro do resultado*/
    let result = document.getElementById('result').innerHTML
    resultado.innerHTML = result.substring(0, result.length - 1) // pega o que tem dentro do p conta do 0 ao tamanho final da string e diinui um número
  }
}

function confirma() {
  if (resultado.textContent != 'Error')
    /*se o que tiver no resultado for diferente de qualquer erro */
    document.getElementById('result').innerHTML = eval(
      resultado.innerHTML
    ) /*vai pegar o que tem dentro do resultado e fazer a conta e o resultado vai ser jogado para dentro do p novamente */
}
