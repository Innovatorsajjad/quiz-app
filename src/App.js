import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Shared/Main/Main';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Error from './Pages/Error/Error';
import Quizes from './components/Quizes/Quizes';


 
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
          path: "/",
          loader:()=>fetch("https://openapi.programming-hero.com/api/quiz"),
          element:<Home></Home>,
        },
        {
          path: '/:id',
          element: <Quizes/>
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/blog",
          element:<Blog></Blog>,
        },
      ]
    },
  ]);
  return (
    <div>
          <RouterProvider router={router} />
    </div>
  );
}

export default App;
