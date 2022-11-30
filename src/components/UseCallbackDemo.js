import React, { useCallback, useMemo, useState } from 'react'

// 类似 class PureComponent 对props只进行浅层比较
const Child = React.memo(({ userInfo, onChange }) => {
  console.log('子组件更新')
  return (
    <div>
      <p>{userInfo.name}, {userInfo.age}</p>
      <input type="text" onChange={onChange} />
    </div>
  )
})

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('AirHua')
  const [age, setAge] = useState(20)

  // useMemo缓存数据
  const userInfo = useMemo(() => {
    return { name, age }
  }, [name, age])

  // useCallback缓存函数
  const onChange = useCallback((e) => {
    console.log(e.target.value)
  }, [])

  console.log('父组件更新')
  return (
    <div>
      <p>
        Count is {count}
        <button onClick={() => setCount(count + 1)}>点击</button>
        <button onClick={() => setName(name + 's')}>点击</button>
        <button onClick={() => setAge(age + 1)}>点击</button>
      </p>
      <Child userInfo={ userInfo } onChange={ onChange }></Child>
    </div>
  )
}
