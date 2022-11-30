import React, { useEffect, useState } from 'react'

export default function UseEffectTrap() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState('AirHua')

  useEffect(() => {
    console.log('渲染', count)

    const timer = setInterval(() => {
      console.log('setInterval', count)
      setCount(count + 1)
    }, 1000)

    return () => {
      console.log('更新')
      clearInterval(timer)
    }
  }, [count])

  return (
    <div>count { count }</div>
  )
}
