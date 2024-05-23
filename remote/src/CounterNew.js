import React from 'react'

export default function CounterNew({ buttonName }) {
  const [count, setCount] = React.useState(0)
  return (
    <button onClick={()=>setCount(c => c+1)}>{buttonName + " " + count}</button>
  )
} 