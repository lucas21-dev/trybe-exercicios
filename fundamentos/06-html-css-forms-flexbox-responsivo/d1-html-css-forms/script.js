function createSelectStates () {
  const estados = [
    'AC - Acre',
    'AL - Alagoas',
    'AP - Amapá',
    'AM - Amazonas',
    'BA - Bahia',
    'CE - Ceará',
    'DF - Distrito Federal',
    'ES - Espírito Santo',
    'GO - Goías',
    'MA - Maranhão',
    'MT - Mato Grosso',
    'MS - Mato Grosso do Sul',
    'MG - Minas Gerais',
    'PA - Pará',
    'PB - Paraíba',
    'PR - Paraná',
    'PE - Pernambuco',
    'PI - Piauí',
    'RJ - Rio de Janeiro',
    'RN - Rio Grande do Norte',
    'RS - Rio Grande do Sul',
    'RO - Rondônia',
    'RR - Roraíma',
    'SC - Santa Catarina',
    'SP - São Paulo',
    'SE - Sergipe',
    'TO - Tocantins'
  ];
  const select = document.querySelector('#estados');
  const option = document.createElement('option');
  
  for (let index of estados) {
    const option = document.createElement('option');
    option.innerText = index;
    option.value = index;
    select.appendChild(option);
  }
}

createSelectStates();

const button = document.getElementById('enviar');


function dateVerification (event) {
  const date = document.getElementById('data');
  const text = date.value;
  const day = text[0] + text[1];
  const div = text[2];
  const month = text[3] + text[4];
  const div2 = text[5];
  const year = text[6] + text[7] + text[8] + text[9];


  if (div !== '/' || div2 !== '/') {
    window.alert('A data de inicio deve ser separadada por: "/ ""!');
  } else if (day < 0 || day > 31) { 
    window.alert('O dia deve ser um valor entre 0 e 31!');
  } else if (month < 0 || month > 12) {
    window.alert('O mês deve ser um valor entre 0 e 12!')
  }

  event.preventDefault();
  compiledData()
}

button.addEventListener('click', dateVerification);

