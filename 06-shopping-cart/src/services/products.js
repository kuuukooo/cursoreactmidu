export const productsAPI = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products')
    const json = await response.json()

    const products = json.products.map(product => ({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.thumbnail,
      description: product.description,
      category: product.category
    }))
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}
