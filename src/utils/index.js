export const formattedData = (time) => {
  const date = new Date(time)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2,0);
  const day = String(date.getDate()).padStart(2, 0);
  const title = `${year}-${month}-${day}`
  return title
}