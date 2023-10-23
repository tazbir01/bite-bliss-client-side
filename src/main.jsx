import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import AuthProvider from './components/Provider/AuthProvider';
import Login from './components/Login/Login';
import AddProduct from './components/AddProduct/AddProduct';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import MyCart from './components/MyCart/MyCart';
import Update from './components/Update/Update';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=> fetch('http://localhost:5000/brands')
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path:"/addproduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:"/products/:brand",
        element: <Products></Products>,
        loader:()=> fetch('http://localhost:5000/products')
      },
      {
        path:"/details/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ()=> fetch("http://localhost:5000/products")
      },
      {
        path:"/mycart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: ()=> fetch("http://localhost:5000/cart")
      },
      {
        path:"/update/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/cart/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
