import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../Page/HomePage';
import NotFoundPage from '../Page/NotFoundPage';
import ProductsPage from '../Page/ProductsPage';
import ProductDetailPage from '../Page/ProductDetailPage';
import LoginPage from '../Page/LoginPage';
import ProductAddPage from '../Page/ProductAddPage';
import CartsPage from '../Page/CartsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/products',
        element: <ProductsPage />
      },
      {
        path: '/products/:productId',
        element: <ProductDetailPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/products/add',
        element: <ProductAddPage />
      },
      {
        path: '/carts/',
        element: <CartsPage />
      }
    ],
  }
]);