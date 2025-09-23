import { useState } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/footer'
// import Data from "./components/ProductList"
import ProductsByCategory from './components/ProductsByCategory'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
       <Header/>
       <Menu/>
      <ProductsByCategory/>
       {/* <Data/> */}
       <Footer/>

       

       
     
    </>
  )
}

export default App
