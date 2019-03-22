import React, { Component } from 'react';

export const MyContext = React.createContext()
//autimatizamos el contextConsumer con las props
//Creamos y exportamos withCounter al que le pasamos un Componente
//(Comp) con las porpiedades heredadas de MyContextProvider
export const withCounter = (Comp) => {
  //clase WithCounter con las props de MyContextProvider
 return class WithCounter extends Component {
   render() {
     console.log('withCounter:', this.props)
     return (
       <>
        <MyContext.Consumer>
          {(value) => (
            <Comp 
            counter = {value.counter}
            increase = {value.increase}
            decrease = {value.decrease}
            //para poder añador mas props en este caso añadimos title
            {...this.props}
            />
          )}
        </MyContext.Consumer>
       </>
     )
   }
 }
}



class CounterProvider extends Component {

  state = {
    counter: 0
  }

  handleIncrease = () => {
    this.setState({
      counter: this.state.counter +1
    })
  } 

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter -1
    })
  } 

  render() {
    return (

        
        /* <MyContext.Provider value='My Provider value from counterprovider'>  */
        <MyContext.Provider 
        value = {{
          counter: this.state.counter,
          increase: this.handleIncrease,
          decrease: this.handleDecrease
        }}
        >

        {/* Todos los hijos que me pasen van aqui */}
           {this.props.children}
        </MyContext.Provider>


    );
  }
}

export default CounterProvider;