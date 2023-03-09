import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useDarkMode } from '../hooks/useDarkMode'
import Button from './button'
// import DarkLigth from './darkLigth'

const DarkLigth = lazy(() => import('./darkLigth'))

const DarkmodeButton = () => {
  const { darkmode, handlerChangeDarkMode } = useDarkMode()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? (
    <Button props={{ onClick: () => handlerChangeDarkMode() }}>
      <Suspense fallback='loading'>
        <DarkLigth darkmode={darkmode} />
      </Suspense>
    </Button>
  ) : null
}

export default DarkmodeButton
