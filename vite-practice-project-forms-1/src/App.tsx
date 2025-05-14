import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import Home from './components/Home';
import Products from './components/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
};

export default App;
