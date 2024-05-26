import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { createHashRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import StudentPage from './pages/StudentPage.jsx'


const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: 'student/:id',
        element: <StudentPage />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
)
