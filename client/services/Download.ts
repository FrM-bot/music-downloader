export const Download = async (url: FormDataEntryValue): Promise<any | Error> => {
  try {
    const response = await fetch("http://localhost:8000/download", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ url }),
    })
    const data = await response.json()

    return data
  } catch (error: any) {
    return { error: error?.message }
  }
}
