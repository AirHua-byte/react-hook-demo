import React, { useContext } from 'react'
import {ThemeContext} from './index'

export default function ThemeButton() {
  const theme = useContext(ThemeContext)

  return (
    <div>
      <button
        style={{
          background: theme.background,
          color: theme.foreground
        }}
      >hello airhua</button>
    </div>
  )
}
