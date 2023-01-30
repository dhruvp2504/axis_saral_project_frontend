import { Route, Routes } from "react-router-dom";
import EmptyNavBar from "./components/NavBar/EmptyNavBar";
import Navbar from "./components/NavBar/NavBar";

import AdminLogin from "./pages/AdminLogin";
import EmployeeLogin from "./pages/EmployeeLogin";
import NewsFeed from "./pages/NewsFeed";
import PolicyDocuments from "./pages/PolicyDocuments";
import ProjectDetails from "./pages/ProjectDetails";
import SalaryDetails from "./pages/SalaryDetails";
import { isLogin } from "./utils/CheckLogin";

function App() {
  return (
    <>
    {isLogin? <Navbar /> : <EmptyNavBar/>}
      
      <Routes>
        <Route path="/" element={<EmployeeLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/news-feed" element={<NewsFeed />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/salary-details" element={<SalaryDetails />} />
        <Route path="/policy-documents" element={<PolicyDocuments />} />
      </Routes>
    </>
  );
}

export default App;
