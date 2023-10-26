import './App.css';
import Counter from './Component/Counter';
import TodoList from './Component/TodoList';
import Toggle from './Component/Toggle';
import Form from './Component/Form';
import UserRegistrationForm from './Component/UserRegistrationForm';

function App() {
  return (
    <div className="App">
      <Counter/>
      <hr/>
      <TodoList/>
      <hr/>
      <Toggle/>
      <hr/>
      <Form/>
      <hr/>
      <UserRegistrationForm/>
    </div>
  );
}

export default App;
