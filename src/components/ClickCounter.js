import React, { useEffect, useRef, useState } from 'react'

export default function ClickCounter() {
  // useState用法
  const [count, setCount] = useState(0)
  const [name, setName] = useState('AirHua')
  // useEffect用法
  // 没有第二个参数类似于 componentDidMount、componentDidUpdate
  // useEffect(() => {
  //   console.log('更新啦')
  // })

  // 第二个参数为[]，类似componentDidMount
  // useEffect(() => {
  //   console.log('初始化完成')
  // }, [])

  // componentDidMount、componentDidUpdate
  // useEffect(() => {
  //   console.log(count)
  // }, [count])

  // useEffect无依赖或依赖[a, b]，组件更新和销毁时时都执行fn
  // useEffect(() => {
  //   console.log(count)

  //   return () => {
  //     console.log('组件销毁')
  //   }
  // }, [count])

  // useEffect依赖[]，组件销毁执行fn，等于WillUnMount
  // useEffect(() => {
  //   console.log('初始化')

  //   return () => {
  //     console.log('组件销毁')
  //   }
  // }, [])

  // useRef用法
  const countRef = useRef(null)
  useEffect(() => {
    // 获取DOM节点
    console.log(countRef.current)
  }, [])


  function clickHandler() {
    setName('AirHua-byte')
    setCount(count + 1)
  }

  return (
    <div>
      <h1>你点击了{count}次</h1>
      <h1>{ name }</h1>
      <button onClick={clickHandler}>点击</button>
    </div>
  )
}
