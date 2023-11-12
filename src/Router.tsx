import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Product } from './pages/Product'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Category } from './pages/Category'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/todas" element={<Category />} />
        <Route path="/sutia" element={<Category />} />
        <Route path="/calcinha" element={<Category />} />
        <Route path="/conjunto" element={<Category />} />
        <Route path="/product/:productId" element={<Product />} />
      </Route>
    </Routes>
  )
}
