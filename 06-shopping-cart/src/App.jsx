import { useState, useEffect } from 'react'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import { useFilters } from './hooks/useFilters'
import { IS_DEVELOPMENT } from './config'
import { CartProvider } from './context/cart'
import { productsAPI } from './services/products'

function App () {
  const { filterProducts } = useFilters()
  const [products, setProducts] = useState([])

  useEffect(() => {
    productsAPI().then(fetchedProducts => setProducts(fetchedProducts))
  }, [])

  const filteredProducts = filterProducts(products)
  console.log(filteredProducts)
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
