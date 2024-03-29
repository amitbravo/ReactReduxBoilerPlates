import { useDispatch, useSelector } from 'react-redux'

import { increment, decrement } from './store/mainReducer'

import './App.css'

function App() {

    const dispatch = useDispatch()
    const { counts } = useSelector(state => state.main)
  return (
      <>
     
     <div>

      <div>counts: {counts}</div>
      <button onClick={()=> dispatch(increment())} >Click counter + </button>
      <button onClick={()=> dispatch(decrement())} >Click counter - </button>

     </div>
       
    </>
  )
}

export default App
