import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import BookRoutes from "./BookRoutes"

function App() {
  return(
  <>
    <nav>
      <ul>
      <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/books/*" element={<BookRoutes />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </>
  )
}

export default App