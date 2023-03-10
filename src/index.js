import 'dotenv/config'
import express from 'express'

import cors from 'cors'

import  { createWriteStream, existsSync } from 'fs'

import { readdir, unlink, mkdir } from "fs/promises"

import ytdl from "ytdl-core"

import path from 'path'

import { DEST_DOWNLOADS, EXTENSION_FILE, rootPath } from '../roopPath.js'

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT ?? 8000

app.use('/tmp', express.static('tmp'))
app.use('/media', express.static(path.join(rootPath, 'tmp')))
app.use(express.static('public'))

app.get('/test', function (req, res) {
    res.sendFile(path.join(rootPath, 'public', 'index.html'))
});

app.get('/musics', async (req, res, next) => {
    try {
        const namesMusics = await readdir(DEST_DOWNLOADS)
        res.status(200).send({  namesMusics, DEST_DOWNLOADS })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})

app.get('/music/:name', async (req, res, next) => {
    const { name } = req.params
    try {
        const namesMusics = await readdir(DEST_DOWNLOADS)
        const indexMusic = namesMusics.findIndex(music => music === name.replace('%', ' '))
        if (indexMusic === -1) {
            res.send({ error: 'music not found' })
        }
        res.status(200).sendFile(path.join(DEST_DOWNLOADS, namesMusics[indexMusic]))
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})

app.post('/download', async (req, res) => {
    try {
        const existDir = existsSync(path.join('.', DEST_DOWNLOADS))
        if (!existDir) {
            await mkdir(path.join('.', DEST_DOWNLOADS), {recursive: true})
        }
        const info = await ytdl.getInfo(req.body.url)
        const files = await readdir(path.join('.', DEST_DOWNLOADS)) || []

        const fileName = info.videoDetails.title.split(' ').join('_') + EXTENSION_FILE

        const details = {
            title: info.videoDetails.title,
            thumbnail: info.videoDetails.thumbnails[info.videoDetails.thumbnails.length -1] ?? '',
            iframeUrl: info.videoDetails.embed.iframeUrl,
            fileName
        }
        if (files.includes(fileName)) {
            return res.status(200).json(details)
        }
        ytdl.downloadFromInfo(info, {
            filter: (format) => format.container === 'webm' && format.hasAudio,
        }).pipe(createWriteStream(path.join(DEST_DOWNLOADS, fileName)))
        res.status(200).json(details)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})

app.post('/clear', async (req, res) => {
    try {
        const name = req.body?.name?.split(' ').join('_') 
        if (name) {
            const pathFile = path.join(DEST_DOWNLOADS, name + EXTENSION_FILE)
            await unlink(pathFile)
            return
        }
        const files = await readdir(DEST_DOWNLOADS) || []
        if (files?.length > 0) {
            files.forEach(async (file) => {
                const pathFile = path.join(DEST_DOWNLOADS, file)
                await unlink(pathFile)
            })
        }
        res.send({
            result: 'ok'
        }).status(200)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})

app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}`)
})
