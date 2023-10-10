'use client'
import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null)
  const toggleTheme = () => {
    setTheme(localStorage.getItem('Mode') === 'light' ? 'dark' : 'light')
    localStorage.setItem('Mode', theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (localStorage.getItem('Mode')) {
      setTheme(localStorage.getItem('Mode'))
    } else {
      // setTheme(null)
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
