import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Flavio"></Greeting> */}
        {/* <GreetingF name={"Flavio"}></GreetingF> */}
        {/* <TaskListComponent></TaskListComponent> */}
        <GreetingStyled name="Flavio"></GreetingStyled>
      </header>
    </div>
  );
}

export default App;
