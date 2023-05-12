import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';
import Clock from './components/pure/entregaClase';
import EntregaFuncion from './components/pure/entregaFuncion';
import Father from './components/container/father';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Greeting name="Flavio"></Greeting> */}
        {/* <GreetingF name={"Flavio"}></GreetingF> */}
        <TaskListComponent></TaskListComponent>
        {/* <GreetingStyled name="Flavio"></GreetingStyled> */}
        {/* <Clock></Clock> */}
        {/* <EntregaFuncion name='Martin' lastName={'San Jose'}></EntregaFuncion> */}
        {/* GEestion de eventos */}
        {/* <Father></Father> */}
      </header>
    </div>
  );
}

export default App;
