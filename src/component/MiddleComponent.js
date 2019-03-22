import React, { Component } from 'react';

import /* {MyContext} */ {withCounter} from '../services/CounterProvider'

//Render calls callback

const MiddleComponent = (props) => {
  return (
    <>
    <h1>The Middle Component</h1>
// {/*   
//   {  <MyContext.Consumer>
  
//       { (value) => (
//          <> }

//           <h2>Context consumer</h2>
//           {/* <p>{value}</p> */}
{/* //         <p>{value.counter}</p>
//         <button onClick={value.increase}>Incrementar</button>
//         </> */}
       
//       )}

{/* //     </MyContext.Consumer> */} */}
  
  
  <h2>Context consumer</h2>
          {/* <p>{value}</p> */}
        <p>{props.counter}</p>
        <button onClick={props.increase}>
        Incrementar</button>
        <button onClick={props.decrease}>
        Incrementar</button>
        
  </>)
  
}

// export default MiddleComponent;
export default withCounter(MiddleComponent);