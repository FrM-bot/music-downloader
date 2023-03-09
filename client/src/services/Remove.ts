export const RemoveMusic = async (name: string) => {
  try {
    const response = await fetch("/clear", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name }),
    })
    const data = await response.json()
    return data
  } catch (error) {
    return { error: error.message }
  }
}
