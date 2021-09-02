function gradeCount(corrects, studentAnswers, checkAnswers) {
  return checkAnswers(corrects, studentAnswers);
}



function checkAnswers(correctAnswers, studentAnswers) {
  let finalGrade = 0;
  for (index = 0; index < correctAnswers.length; index += 1) {
    if (studentAnswers[index] === 'N.A') {
      finalGrade = finalGrade;
    } else if (correctAnswers[index] === studentAnswers[index]) {
      finalGrade += 1;
    } else {
      finalGrade -= 0.5;
    }
  }
  return finalGrade;
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(gradeCount(rightAnswers, studentAnswers, checkAnswers))