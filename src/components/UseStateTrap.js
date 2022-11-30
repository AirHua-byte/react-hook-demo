import React, { useState } from 'react'

function Child(props) {
  // 使用props.name初始化state 只有第一次有效
  const [name] = useState(props.name)

  return (
    <div>
      <p>props name: {props.name}</p>
      <p>state name: { name }</p>
    </div>
  )
}

export default function UseStateTrap() {
  const [name, setName] = useState('AirHua')

  return (
    <div>
      <div>
        父组件 
        {/* 这里改变传入子组件name */}
        <button onClick={() => setName('AirHua-byte')}>改变name</button>
      </div>
      <Child name={name}></Child>
    </div>
  )
}
