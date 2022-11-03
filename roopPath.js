import path from 'path'
const {pathname} = new URL('./', import.meta.url)
export const rootPath = pathname.slice(1)

console.log({rootPath})

export const DEST_DOWNLOADS = path.join(rootPath, 'tmp')

export const EXTENSION_FILE = '.mp3'
