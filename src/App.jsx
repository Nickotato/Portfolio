import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {

function Hello() {
  return (
    <h1>Hello, World</h1>
  )
}

function Test() {
  return (
    <h1>Goodbye, World</h1>
  )
}

  return (
    <BrowserRouter>
    <Link to="/test">Test</Link>
    <Routes>
      <Route path="/" element={<Hello />}/>
      <Route path="/test" element={<Test />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
