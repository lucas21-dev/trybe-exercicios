const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addTurn (obj, turno, manha) {
  obj[turno] = manha;
}

addTurn(lesson2, 'turno', 'manhã');

function listKeys(obj) {
  return Object.keys(obj);
}

listKeys(lesson1);

function objLength(obj) {
  const arrayOfObject = Object.keys(obj);
  return arrayOfObject.length;
}

objLength(lesson3);

function valueList(obj) {
  const objValues = Object.values(obj);
  return objValues;
}

valueList(lesson2);

