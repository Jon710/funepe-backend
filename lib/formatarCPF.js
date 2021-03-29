/* eslint-disable camelcase */
function formatarCPF(cpf) {
  let ao_cpf = cpf;
  // const cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;
  ao_cpf = ao_cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
  ao_cpf = ao_cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
  // de novo (para o segundo bloco de números)
  ao_cpf = ao_cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca um hífen entre o terceiro e o quarto dígitos

  // 24761891890
  // 015.349.348-80
  // 01534934880
  return ao_cpf;
}
module.exports = formatarCPF;
