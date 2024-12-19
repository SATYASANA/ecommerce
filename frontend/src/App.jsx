import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./components/login/Login"
import Signup from "./components/signup/Signup"


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
