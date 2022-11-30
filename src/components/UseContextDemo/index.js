import React from 'react'
import Toolbar from './Toolbar'

// 主题颜色
const themes = {
  light: {
    foreground: '#000',
    background: '#eee'
  },
  dark: {
    foreground: '#fff',
    background: '#222'
  }
}

// 创建Context
export const ThemeContext = React.createContext(themes.light)

export default function UseContextDemo() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar></Toolbar>
    </ThemeContext.Provider>
  )
}
