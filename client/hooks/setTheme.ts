export const setDarkTheme = () => {
  document.documentElement.setAttribute('data-theme', 'dark')
}

export const removeDarkTheme = () => {
  document.documentElement.setAttribute('data-theme', 'ligth')
}
