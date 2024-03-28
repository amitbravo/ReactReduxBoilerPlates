import { useDispatch, useSelector } from 'react-redux'

import './App.css'

function App() {

    const dispatch = useDispatch()
    const { counts } = useSelector(state => state.main)
  return (
    <>
     
     <div>

      <div>counts: {counts}</div>
      <button onClick={()=> dispatch({ type: 'INCREMENT'  })} >Click counter + </button>
      <button onClick={()=> dispatch({ type: 'DECREMENT'  })} >Click counter - </button>

     </div>
       
    </>
  )
}

export default App
