import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/layout'
import Home from './components/Home/home'
import About from './components/about/about'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
