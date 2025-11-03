import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.tsx';
import Error from './routes/Error/index.tsx';
import Contato from './routes/Contato/index.tsx';
import Faq from './routes/Faq/index.tsx';
import Equipe from './routes/Equipe/index.tsx';
import Tutorial from './routes/Tutorial/index.tsx';

const router = createBrowserRouter([
  {path:"/", element: <App/>, errorElement:<Error/>, children:[
    {path:"/", element: <Home/>},
    {path:"/Contato", element: <Contato/>},
    {path:"/Faq", element: <Faq/>},
    {path:"/Equipe", element: <Equipe/>},
    {path:"/Tutorial", element: <Tutorial/>}
  ]}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
