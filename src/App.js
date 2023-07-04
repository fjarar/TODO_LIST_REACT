import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';
import Clock from './components/pure/entregaClase';
import EntregaFuncion from './components/pure/entregaFuncion';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import SquareColorChange from './components/pure/squareColorChange';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import TaskFormik from './components/pure/forms/taskFormik';
import FetchExample from './components/pure/fetchExample';
import AxiosExample from './components/pure/AxiosExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Greeting name="Flavio"></Greeting> */}
        {/* <GreetingF name={"Flavio"}></GreetingF> */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* Ejemplo de Renderizado Condicional */}
        {/* <OptionalRender></OptionalRender> */}
        {/* <GreetingStyled name="Flavio"></GreetingStyled> */}
        {/* <Clock></Clock> */}
        {/* <EntregaFuncion name='Martin' lastName={'San Jose'}></EntregaFuncion> */}
        {/* Gestion de eventos */}
        {/* <Father></Father> */}
        {/* <SquareColorChange></SquareColorChange> */}
        {/* <FetchExample></FetchExample> */}
        <AxiosExample></AxiosExample>
        {/* Ejemplos de uso de Formik y Yup */}
        {/* <LoginFormik></LoginFormik> */}
        {/* <RegisterFormik></RegisterFormik> */}
        {/* <TaskFormik></TaskFormik> */}

      </header>
    </div>
  );
}

export default App;
