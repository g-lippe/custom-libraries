/**
 * --------------------------------------------------
 * Contar o total de [campo] em [array]
 * 
 * Exemplo: array 'Pacientes' contem registro de pacientes, cada um tem o campo 'CIDADE'
 * 
 * Pacientes [
 *  {NOME: João, CIDADE: Jundiai},
 *  {NOME: Pedro, CIDADE: Varzea},
 *  {NOME: Mariana, CIDADE: Itatiba},
 *  {NOME: Lucas, CIDADE: Jundiai},
 *  {NOME: Paula, CIDADE: Jundiai},
 * ]
 * 
 * Rodando a função contarTotais('CIDADE', Pacientes) irá resultar no seguinte output:
 * [
 *  {CIDADE: 'Jundiai', QUANT: 3},
 *  {CIDADE: 'Varzea', QUANT: 1},
 *  {CIDADE: 'Itatiba', QUANT: 1}
 * ]
 * 
 * -> array: o array com os dados
 * -> campo: o campo do array para ser contado
 * -> porcentagem: Opcional, campo adicional que calcula a porcentagem daquele valor sobre o total ex: true ou false
 * -> nome_var / nome_var_soma: opicional, especificam nomes para os objetos do resultado
 *    ex: ao usar os valores 'name' e 'total':
 *    ao invés de {CIDADE: 'Jundiai', QUANT: 3} o resultado será {name: 'Jundiai', total: 3}
 * 
 * 
 * --------------------------------------------------
 * Criado por: Gabriel Felippe
 * Data: 08/08/2023
 * --------------------------------------------------
 */

export function contarTotais(campo, array, porcentagem, nome_var, nome_var_soma) {
  var res_temp = {}

  // Valores padrão para variaveis opcionais
  if (!nome_var) { nome_var = campo }
  if (!nome_var_soma) { nome_var_soma = 'QUANT' }
  if (!porcentagem) { porcentagem = false }


  // sort by name
  array.sort((a, b) => {

    const nameA = a[campo]; // ignore upper and lowercase
    const nameB = b[campo]; // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });


  array.forEach(linha => {

    if (linha[campo] != undefined) {

      res_temp[linha[campo]] = {
        [nome_var]: linha[campo],
        [nome_var_soma]: res_temp[linha[campo]] ? res_temp[linha[campo]].QUANT + 1 : 1
      }
    }
  })

  // Calcular porcentagens
  if (porcentagem = true) {
    let length = array.length

    Object.keys(res_temp).map(item => (
      // console.log('item: ', item)
      res_temp[item].POR = parseFloat(((res_temp[item][nome_var_soma] / length) * 100).toFixed(2))
    ))
  }

  console.log(res_temp)
  return Object.values(res_temp)
}