import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Product } from './pages/Product'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Category } from './pages/Category'

export function Router() {
  return (
    <Routes>
      <Route path="/ka_rita" element={<DefaultLayout />}>
        <Route path="/ka_rita" element={<Home />} />
        <Route path="/ka_rita/todas" element={<Category />} />
        <Route path="/ka_rita/sutia" element={<Category />} />
        <Route path="/ka_rita/calcinha" element={<Category />} />
        <Route path="/ka_rita/conjunto" element={<Category />} />
        <Route path="/ka_rita/product/:productId" element={<Product />} />
      </Route>
    </Routes>
  )
}
