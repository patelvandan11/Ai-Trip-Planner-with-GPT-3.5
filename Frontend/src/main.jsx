import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import CreateTrip from './components/custom/Create_trip.jsx'
import Header from './components/custom/Header.jsx'
import Chatbot from './components/custom/Chatbot.jsx'
import Features from './components/custom/Features.jsx'
import Form from './components/custom/Form.jsx'
import Login from './components/custom/Login'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/create-trip',
      element: <CreateTrip />
    },
    {
      path: '/feature',
      element: <Features />
    },
    {
      path: '/form',
      element: <Form />
    },
    {
      path: '/login',
      element: <Login />
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <RouterProvider router={router}/>
    <Chatbot></Chatbot>
  </StrictMode>
)
