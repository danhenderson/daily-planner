export const getLocalStorage = key => {
  const data = window.localStorage.getItem(key)
  return data ? JSON.parse(data) : {}
}

export const setLocalStorage = (key, data) => {
  const json = JSON.stringify(data)
  window.localStorage.setItem(key, json)
}
