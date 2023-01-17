import Admin from "./pages/Admin"
import EmployeeLogin from "./pages/EmployeeLogin"

import NewFeed from "./pages/NewFeed"
import Projectdetails from "./pages/Projectdetails"
import SalaryDetails from "./pages/SalaryDetails"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
     
      <Routes>
        <Route path="/" element={<EmployeeLogin />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Newfeed" element={<NewFeed />} />
        <Route path="/Projectdetails" element={<Projectdetails />} />
        <Route path="/SalaryDetails" element={<SalaryDetails />} />


      </Routes>


    </>
  )
}

export default App;
