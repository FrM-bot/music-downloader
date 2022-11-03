import 'dotenv/config'
import express from 'express'

import cors from 'cors'

import fs from 'fs'

import { readdir, unlink } from "fs/promises"

import ytdl from "ytdl-core"

import path from 'path'

import { DEST_DOWNLOADS, EXTENSION_FILE, rootPath } from '../roopPath.js'

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT ?? 8000

// app.use('/public', express.static(rootPath + '/public'))
app.use(express.static('public'))

app.get('/test', function (req, res) {
    console.log(path.join(rootPath, 'public', 'index.html'), 'root');
    res.sendFile(path.join(rootPath, 'public', 'index.html'))
});

app.get('/musics', async (req, res, next) => {
    try {
        const namesMusics = fs.readdirSync(DEST_DOWNLOADS)
        res.status(200).send(namesMusics)
    } catch (error) {
        console.error(error)
    }
})

app.get('/music/:name', async (req, res, next) => {
    const { name } = req.params
    try {
        const namesMusics = fs.readdirSync(DEST_DOWNLOADS)
        const indexMusic = namesMusics.findIndex(music => music === name.replace('%', ' '))
        console.log(namesMusics[indexMusic], namesMusics, indexMusic, name);
        if (indexMusic === -1) {
            res.send({ error: 'music not found' })
        }
        res.status(200).sendFile(path.join(DEST_DOWNLOADS, namesMusics[indexMusic]))
    } catch (error) {
        console.error(error)
    }
})

app.post('/download', async (req, res) => {
    try {
        if (!fs.existsSync(DEST_DOWNLOADS)) {
            fs.mkdirSync(DEST_DOWNLOADS)
        }
        const info = await ytdl.getInfo(req.body.url)
        const files = fs.readdirSync(DEST_DOWNLOADS)

        const details = {
            title: info.videoDetails.title,
            thumbnail: info.videoDetails.thumbnails.at(-1),
            iframeUrl: info.videoDetails.embed.iframeUrl
        }
        if (files.includes(info.videoDetails.title + EXTENSION_FILE)) {
            return res.status(200).json(details)
        }
        ytdl.downloadFromInfo(info, {
            filter: (format) => format.container === 'webm' && format.hasAudio,
        }).pipe(fs.createWriteStream(path.join(DEST_DOWNLOADS, info.videoDetails.title + EXTENSION_FILE)))
        res.status(200).json(details)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})

app.post('/clear', async (req, res) => {
    try {
        if (req.body?.name) {
            const pathFile = path.join(DEST_DOWNLOADS, req.body?.name + EXTENSION_FILE)
            await unlink(pathFile)
        }
        const files = await readdir(DEST_DOWNLOADS)
        if (files.length > 0) {
            files.forEach(async (file) => {

                const pathFile = path.join(DEST_DOWNLOADS, file)
                await unlink(pathFile)
                console.log(file, pathFile)
            })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})

// app.use('*', async (req, res, next) => {
//     res.send('not found')
// })

app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}`)
})