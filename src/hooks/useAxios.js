import axios from 'axios'
import { useEffect, useState } from 'react'

// 封装axios发送网络请求的自定义hook
export default function useAxios(url, config = {}) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    setLoading(true)
    axios.get(url)
      .then(res => setData(res))
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }, [url, config])

  return [loading, data, error]
}