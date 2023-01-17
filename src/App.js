import admin from "./pages/admin"
import employeelogin from "./pages/employeelogin"
import Navbar from "./navbar"
import newfeed from "./pages/newfeed"
import projectdetails from "./pages/projectdetails"
import SalaryDetails from "./pages/SalaryDetails"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          {/* { <Route path="/" element={<Home />} /> } */}
          <Route path="/newfeed" element={<newfeed />} />
          <Route path="/projectdetails" element={<projectdetails />} />
          <Route path="/SalaryDetails" element={<SalaryDetails />} />
        </Routes>
      </div>
    </>
  )
}

export default App