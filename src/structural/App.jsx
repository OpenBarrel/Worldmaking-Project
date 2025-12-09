import { HashRouter, Routes, Route } from 'react-router'
import Layout from './Layout'
import Home from '../pages/Home'
import Landing from '../pages/Landing'
import Messages from '../pages/Messages'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Landing/>}></Route>
          <Route path="/featured-artists" element={<Home/>}></Route>
          <Route path="/messages" element={<Messages/>}></Route>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
