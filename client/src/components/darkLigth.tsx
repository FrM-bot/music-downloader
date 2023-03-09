import React,{ lazy, Suspense } from 'react'

const SVGDark = lazy(() => import('./icons/SVGDark'))

const SVGLigth = lazy(() => import('./icons/SVGLigth'))

const DarkLigth = ({ darkmode }) => {
  return (
    <Suspense fallback='loading'>
        { darkmode ? <SVGDark /> : <SVGLigth /> }
    </Suspense>
  )
}

export default DarkLigth
