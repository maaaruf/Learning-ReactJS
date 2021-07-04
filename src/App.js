import logo from './logo.svg';
import './App.css';

/*Functional OR Class componet can be used for view by uncommenting the namespace*/
import MyComponent from './Components/MyFunctionalComponent';
// import MyComponent from './Components/MyClassComponent';

function App() {
  return <div><MyComponent Name="Maruf" Age="20" Profession="SWE" /></div>;
}

export default App;
