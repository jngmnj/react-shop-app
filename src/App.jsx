import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage/index";
import DetailPage from './pages/DetailPage/index';
import NotFoundPage from './pages/NotFoundPage/index';
import OrderPage from './pages/OrderPage/index';
import LoginPage from './pages/LoginPage/index';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage/index';

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="product/:id" element={<DetailPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="order" element={<OrderPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
