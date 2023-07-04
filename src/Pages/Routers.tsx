import { Navigate, Route, Routes } from "react-router";
import Candidate from "./candidate";
import Job from "./job";
import CreateJobForm from "./createJobForm";
export default function Router() {
    return (
      <div>
        <Routes>
          <Route path='/candidate/job/:id' element={<Candidate />} />
          <Route path='/job' element={<Job />} />
          <Route path="/createJobForm" element={<CreateJobForm/>} />
          <Route path='/' element={<Navigate to='/job' />} />
        </Routes>
      </div>
    );
  }