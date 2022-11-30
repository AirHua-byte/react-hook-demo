import React, { useMemo, useState } from 'react'

// 类似 class PureComponent 对props只进行浅层比较
const Child = React.memo(({ userInfo, data }) => {
  console.log('子组件更新')
  return (
    <div>
      <p>{userInfo.name}, { userInfo.age }</p>
      <p>{data.name}, { data.age }</p>
    </div>
  )
})

export default function UseMemoDemo() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('AirHua')
  const [age, setAge] = useState(20)
  // const [propsData, setPropsData] = useState({
  //   name: 'aithua',
  //   age:20
  // })

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPropsData({
  //       ...propsData
  //     })
  //   },2000)
  // }, [])

  

  // const pData = useMemo(() => {
  //   return {
  //     ...propsData
  //   }
  // },[propsData])

  // useMemo缓存数据
  const userInfo = useMemo(() => {
    return { name, age }
  }, [name, age])

  console.log('父组件更新')
  return (
    <div>
      <p>
        Count is {count}
        <button onClick={() => setCount(count + 1)}>点击</button>
        <button onClick={() => setName(name + 's')}>点击</button>
        <button onClick={() => setAge(age + 1)}>点击</button>
      </p>
      <Child userInfo={ userInfo }></Child>
    </div>
  )
}
