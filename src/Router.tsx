import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Product } from './pages/Product'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/ka_rita" element={<DefaultLayout />}>
        <Route path="/ka_rita" element={<Home />} />
        <Route path="/ka_rita/product/:productId" element={<Product />} />
      </Route>
    </Routes>
  )
}
