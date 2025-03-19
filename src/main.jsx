import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from './Pages/login.jsx'
import RegisterPage from './Pages/register.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Pages/404.jsx'
import ProductPage from './Pages/products.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello World</h1>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "/products",
    element: <ProductPage></ProductPage>,
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
