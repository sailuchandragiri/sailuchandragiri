import './App.css';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <AddTodo/>
      </header>
      <header className="App-header">
       <TodoList/>
      </header>
    </div>
  );
}

export default App;
