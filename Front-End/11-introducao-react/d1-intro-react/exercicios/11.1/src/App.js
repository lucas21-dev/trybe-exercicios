import './App.css';

const toDo = ['acordar', 'ligar PC', 'entrar no course', 'fazer exercicios'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
};

const listCreate = toDo.map((el) => Task(el));

function App() {
  return (
    <div>{listCreate}</div>
  );
}

export default App;
