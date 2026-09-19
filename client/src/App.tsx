
import { BrowserRouter, Routes, Route } from 'react-router'
import ComingSoon from '../pages/ComingSoon/ComingSoon'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
