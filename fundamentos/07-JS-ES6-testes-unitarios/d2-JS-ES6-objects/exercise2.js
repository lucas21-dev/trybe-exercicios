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

function totalStudents(obj) {
  const totalStudents = obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes;
  return totalStudents;
}

function createAllLessons(obj1, obj2, obj3) {
  const allLessons = {};
  allLessons.lesson1 = {};
  allLessons.lesson2 = {};
  allLessons.lesson3 = {};
  Object.assign(allLessons.lesson1, obj1);
  Object.assign(allLessons.lesson2, obj2);
  Object.assign(allLessons.lesson3, obj3);
  console.log(allLessons);
  console.log(totalStudents(allLessons));
}

createAllLessons(lesson1, lesson2, lesson3);

function getValueByNumber(obj, index) {
  const indexObj = Object.values(obj);
  return indexObj[index];
}

getValueByNumber(lesson1, 0);

