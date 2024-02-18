import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { MainLayout } from "./layout"
import { ProductDetails } from "./pages/product-detail/product-details"





function App() {
  return (
    <>
   <Routes>
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="/:slug" element={<ProductDetails/>}/>
    </Route>
   </Routes>
      
    </>
  )
}

export default App
