export const GetMusic = async (
  name: string
) => {
    try {
        const music = await fetch(`http://localhost:8000/music/${name}`)
        const musicBlob = await music.blob()
        const url = URL.createObjectURL(musicBlob)
        return url
    } catch (error: any) {
        return { error: error?.message }
    }
}
