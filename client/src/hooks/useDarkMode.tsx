import { useEffect, useState } from 'react'
import { setDarkTheme, removeDarkTheme } from './setTheme'
import { setLocalDarkModeValue, getLocalDarkModeValue } from './useLocalStorege'
interface ReturnProps {
    darkmode: boolean
    handlerChangeDarkMode: () => void
}
export const useDarkMode = () : ReturnProps => {
  const [darkmode, setDarkmode] = useState(getLocalDarkModeValue())

  useEffect(() => {
    if (darkmode) {
      setDarkTheme()
      setLocalDarkModeValue(darkmode)
    }
    if (!darkmode) {
      removeDarkTheme()
      setLocalDarkModeValue(darkmode)
    }
    // setMounted(true)
  }, [darkmode])

  const handlerChangeDarkMode = () => {
    setDarkmode(prevValue => !prevValue)
  }

  return { darkmode, handlerChangeDarkMode }
}
