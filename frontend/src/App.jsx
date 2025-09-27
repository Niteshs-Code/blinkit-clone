import { useState } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/footer'
import ProductsByCategory from './components/ProductsByCategory'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
       <Header/>
       <Menu/>
      <ProductsByCategory/>
       <Footer/>

       

       
     
    </>
  )
}

export default App
