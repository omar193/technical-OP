import './App.css';
import TodoInput from './components/TodoInput';
import Todos from './components/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>
           liste Todos:
        </h3>
        <Todos />
        <TodoInput />
      </header>
    </div>
  );
}

export default App;
