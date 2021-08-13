function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.

function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDays = document.getElementById('days');

  for (let index of dezDaysList) {
    let NumOfDay = index;
    let dayList = document.createElement('li');

    if (NumOfDay === 25 ) {
      dayList.className = 'day friday holiday';
    } else if (NumOfDay === 4 || NumOfDay === 11 || NumOfDay === 18) {
      dayList.className = 'day friday';
    } else if (NumOfDay === 24 || NumOfDay === 31) {
      dayList.className = 'day holiday';
    } else {
      dayList.className = 'day';
    }

    dayList.innerText = NumOfDay;
    
    monthDays.appendChild(dayList);
  }
}

createDaysOfTheMonth();


function holidays(feriados) {
  const buttonHoliday = document.createElement('button');
  buttonHoliday.id = 'btn-holiday';
  buttonHoliday.innerText = feriados;
  const buttons = document.querySelector('.buttons-container');
  buttons.appendChild(buttonHoliday)
}

holidays('Feriados');

const buttonHoly = document.querySelector('#btn-holiday');
buttonHoly.addEventListener('click', handleColorChange);

function handleColorChange() {
  const liHolidays = document.getElementsByClassName('holiday');

  for (let index of liHolidays) {
    let holiday = index;
    if (holiday.style.backgroundColor != 'white') {
      holiday.style.backgroundColor = 'white';
    } else {
      holiday.style.backgroundColor = 'rgb(238,238,238)';
    };
  };
};

function fridays(friday) {
  const day = document.createElement('button');
  day.id = 'btn-friday';
  day.innerText = friday;
  const buttons2 = document.querySelector('.buttons-container');
  buttons2.appendChild(day);
}

fridays('Sexta-Feira');

const buttonFri = document.querySelector('#btn-friday');
buttonFri.addEventListener('click', handleColorChange2);

function handleColorChange2() {
  const liFridays = document.getElementsByClassName('friday');

  for (let index of liFridays) {
    let friday = index;
    if (friday.style.backgroundColor != 'rgb(152, 255, 152)') {
      friday.style.backgroundColor = 'rgb(152, 255, 152)';
    } else {
      friday.style.backgroundColor = 'rgb(238, 238, 238)';
    };
  };
};


