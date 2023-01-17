import { Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import EmployeeLogin from "./pages/EmployeeLogin";
import NewsFeed from "./pages/NewsFeed";
import ProjectDetails from "./pages/ProjectDetails";
import SalaryDetails from "./pages/SalaryDetails";

function App() {

  return (
    <>
     
      <Routes>
        <Route path="/" element={<EmployeeLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/news-feed" element={<NewsFeed />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/salary-details" element={<SalaryDetails />} />


      </Routes>


    </>
  )
}

export default App;
