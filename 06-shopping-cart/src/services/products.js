export const products = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}
