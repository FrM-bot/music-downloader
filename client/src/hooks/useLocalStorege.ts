export const setLocalDarkModeValue = (value: boolean) => {
  globalThis.window.localStorage.darkmode = JSON.stringify(value)
}

export const getLocalDarkModeValue = (): boolean => {
  return globalThis?.window?.localStorage?.darkmode === 'true'
}
