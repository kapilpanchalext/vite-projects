import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import Root from './components/Root';
import UserDetailsForm from './components/UserDetailsForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/user-details",
        element: <UserDetailsForm />,
      }
    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
};

export default App;
