import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const ShopPage = lazy(() => import('./pages/ShopPage'));

function App() {
  return (
    <Routes>
      <Route index element={<ShopPage />} />
      {/* <Route path="/cart" element={<ShoppingCartPage />} /> */}
      <Route path="*" element={<Navigate to="index " />} />
    </Routes>
  );
}

export default App;
