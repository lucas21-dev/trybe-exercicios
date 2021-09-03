const newEmployees = (person) => {
  const employees = {
    id1: person1, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: person2, // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: person3, // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const person = (employeeName) => {
  const emailName = employeeName.replace(' ', '_');
  return {
    nome: employeeName,
    email: `${emailName}@trybe.com`
  };
}

const person1 = person('Pedro Guerra');
const person2 = person('Luiza Drumond');
const person3 = person('Carla Paiva');

console.log(newEmployees());