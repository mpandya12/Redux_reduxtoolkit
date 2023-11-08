
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Dicremnet, Increment, Multipal } from './Action/Action';


function App() {
    const mystate = useSelector((state)=>state.ChangeNumber)
    console.log(mystate);
    const dispatch=useDispatch()

  return (
    <div className="App">

      <div>
        <button  onClick={()=>dispatch(Increment())}>Incremnet</button>
        <button onClick={()=>dispatch(Dicremnet())}>Decrement</button>
        <button onClick={()=>dispatch(Multipal(2))}>Multipl</button>
        <br>
        </br>
        <h1>{mystate}</h1>
        
        
      </div>
     
    </div>
  );
}

export default App;
