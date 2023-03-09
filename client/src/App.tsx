import React from 'react'
import Card from './components/card'
import SVGCross from './components/icons/SVGCross'
import { FormEvent, useEffect, useRef, useState } from 'react'
import Button from './components/button'
import Input from './components/input'
import Link from './components/link'
import { Download } from './services/Download'
import Layout from './components/Layout'
import ytdl from "ytdl-core"
import { RemoveMusic } from './services/Remove'

export type DataDownload = {
  title: string
  thumbnail: ytdl.thumbnail | undefined
  iframeUrl: string
  fileName: string
}

export default function Home() {
  const refForm = useRef(null)
  const [data, setData] = useState<DataDownload>()
  const [errorMessage, seterrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement> | undefined): void => {
    e?.preventDefault()
    const form = refForm.current
    if (form) {
      const formData = Object.fromEntries(new FormData(form))
      setIsLoading(true)
      formData?.url && Download(formData?.url ?? '').then((res) => {
        if (res?.error) {
          console.error(res?.error)
          return seterrorMessage(res?.error)
        }
        setData(res)
        seterrorMessage('')
      }).catch(console.error)
      .finally(() => setIsLoading(false))
    }
  }

  useEffect(() => {
    window.addEventListener("beforeunload", function (e) {
      const confirmationMessage = "\o/"
      e.returnValue = confirmationMessage
      return confirmationMessage
    })

    window.onunload = function () {
      if (!navigator.sendBeacon) return

      const url = "/clear"

      navigator.sendBeacon(url)
    }
  }, [])

  const handlerDeleteMusic = (name: string) => {
    RemoveMusic(name).then(console.log).catch(console.error)
    setData(undefined)
  }

  return (
    <Layout>
      <div className='min-h-[80vh] max-w-2xl m-auto'>
        <form className='' ref={refForm} onSubmit={onSubmit}>
          <div className='flex gap-3 items-center justify-center my-3 w-full'>
            <Input props={{ name: 'url', type: 'url', required: true, placeholder: 'Music URL' }} />
            <Button props={{ type: 'submit' }} isLoading={isLoading}>Search</Button>
          </div>
        </form>
        {
          errorMessage &&
          <div className='bg-pink-400 p-2 rounded'>
            <span>{errorMessage}</span>
          </div>
        }
        <div className='flex flex-col gap-5 mt-8'>
          {
            data?.title &&
            <Card>
              <div className='flex justify-between items-center'>
                <h2>{data.title}</h2>
                <Button props={{ onClick: () => handlerDeleteMusic(data.title) }}><SVGCross /></Button>
              </div>

            </Card>
          }
          {
            data?.iframeUrl &&
            <iframe loading='lazy' title="trailer" className='aspect-video w-full' src={data?.iframeUrl} allowFullScreen />
          }

        </div>
        {
          data &&
          <div className='flex justify-center mt-2'>
            <Link props={{ title: data?.title, href: 'media/' + data?.fileName, download: data?.title.concat('.mp3') }}>DownLoad</Link>
          </div>
        }
      </div>
    </Layout>
  )
}


