import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './components/Products'
import RootLayout from './Layout/RootLayout'
import Home from './components/Home';

const router = createBrowserRouter([
  {path:'/', element:<RootLayout/>,children:[
    {path:'',element:<Home/>},
    {path:'products',element:<Products/>}
  ]}
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
