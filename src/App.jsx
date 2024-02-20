import { MainLayout } from "./layout"
import { Home } from "./pages/home"
import { Routes, Route } from "react-router-dom"
import { ProductDetails } from "./pages/product-detail/product-details"




function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:slug" element={<ProductDetails/>}/>
    </Routes>
      
    </>
  )
}

export default App
