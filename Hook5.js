import { useReducer } from "react";
function Hook5(){
    const initialstate=1
     const [state, dispatch] = useReducer(reducer, initialstate);

function reducer(state, action) {

  	if (action.type === 'increment') {

  	  return state+1

 	 }
     if (action.type === 'decrement') {

  	  return state-1

 	 }

  

}

  return (

    <>
        <h1>{state}</h1>
      <button onClick={() => {dispatch({ type: 'increment' })}}>Increment</button>
      <button onClick={() => {dispatch({ type: 'decrement' })}}>Decrement</button>
        

      

    </>

  );
}
export default Hook5