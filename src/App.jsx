import { Outlet } from 'react-router-dom'

import Navbar3 from './pages/components/Navbar3'

import './App.css'

function App() {
  return (
    <>
      <Navbar3 />
      <Outlet />

    </>
  )
}

export default App
