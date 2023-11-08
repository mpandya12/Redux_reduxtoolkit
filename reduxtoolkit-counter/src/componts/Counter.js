import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multipla } from '../CounterSlice'
function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(multipla(2))}
      >
       Multipal
      </button>
    </div>
  </div>
  )
}

export default Counter