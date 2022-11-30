import React from 'react'
import useAxios from '../hooks/useAxios'

export default function CustomHook() {
  const [loading, data, error] = useAxios('http://fundadm.huabyte.com/fetchFundInfo/000001')
  
  if (loading) return <div>loading</div>

  return (
    <div>
      {
        error ? <div>{JSON.stringify(error)}</div>
          : <div>{ JSON.stringify(data) }</div>
      }
    </div>
  )
}
