import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/home_page/HomePage'
import WordCounterPage from './components/word-counter/WordCounterPage'

let allRouter = createBrowserRouter([
  {
    path:'home-page',
    element:<HomePage></HomePage>
  },
  {
    path:'word-counter',
    element:<WordCounterPage></WordCounterPage>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={allRouter}></RouterProvider>
  </StrictMode>,
)
