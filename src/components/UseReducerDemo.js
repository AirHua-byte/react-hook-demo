import React, { useReducer } from 'react'

const initialState = { count: 0 }

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrment":
      return { count: state.count - 1 }
    default:
      return state
  }
}

export default function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>增加</button>
      <button onClick={() => dispatch({ type: 'decrment' })}>减少</button>
    </div>
  )
}
