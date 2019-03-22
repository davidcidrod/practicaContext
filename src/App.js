import React, { Component, /* Fragment  */} from 'react';

//Fragment sirve para no wrapear el nodo con un div
import './App.css';
//import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import CounterProvider, /* {MyContext} */ {withCounter} from './services/CounterProvider'
import MiddleComponent from './component/MiddleComponent'
import PokemonList from './component/PokemonList';

//creamos un myContext
// const MyContext = React.createContext();
// //Padre-> App Hijo ->Provider Hijo-> MiddleComponent Hijo-> Consumer
// const MiddleComponent = () => {
//   return (<div>
//     <h1>The Middle Component</h1>
//     <MyContext.Consumer>
//       { (value) => (
//          <> {/* //Esto es el shortcut para fragment, tembien se puede quitar el import Fragment */}

//           <h2>Context consumer</h2>
//           <p>{value}</p>

//         </>
       
//       )}

//     </MyContext.Consumer>
//   </div>)
// }

// const Navbar = () => {
  const Navbar = (props) => {
  return (
    // <MyContext.Consumer>
    
      //{(value)} => {
    <nav>
      <h1>{props.title}</h1>
      <ul>
        <li>Home</li>
        <li>Favorites: {props.counter}</li>
      </ul>
    </nav>
    )
  }

  const NavbarWithCounter = withCounter(Navbar)
    {/* </MyContext.Consumer> */}
//   )
// }

class App extends Component {
  render() {
    return (
      <div className="App">
                  {/* Ya no hace falta ahora esta en CounterProvider */}
      <CounterProvider /* value='My Provider value' */>
        <NavbarWithCounter title='Navbar' />
        <MiddleComponent />
        <MiddleComponent />
        <PokemonList />
      </CounterProvider>
             
      </div>
    );
  }
}

export default App;

//Context pasar valores de padre a lo que sea
//Pasamos en value lo que necesitemos(objeto, funciones, lo que queramos)
//MyContext.Provider value={/*some value*/}

//Recibimos en los valores que necesitemos
//<MyContext.Consumer>
//  {value => /*render something based on the context value}
//</MyContext.Consumer>