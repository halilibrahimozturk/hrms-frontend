import React from 'react'
import SuggestedJobs from "./SuggestedJobs";
import JobTitles from "./JobTitles";
import FastSearch from './FastSearch';
import JobList from '../pages/JobList'
import SuggestedTitles from './SuggestedTitles';
import {Routes, Route} from "react-router-dom"
import JobDetail from '../pages/JobDetail';
import AppliedJobs from '../pages/AppliedJobs';
import { ToastContainer } from 'react-toastify';


export default function Dashboard() {
  return (

  
    <div>

<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>


      <JobTitles />

      <SuggestedJobs />

      <SuggestedTitles />


      <FastSearch />

      {/* <JobList /> */}

   
      <Routes>
    


    <Route exact path = "/" element = {<JobList/>} />
    <Route exact path = "/jobs" element = {<JobList/>} />
    <Route path = "/jobs/:id" element = {<JobDetail/>} />
    <Route  path = "/appliedJobs" element = {<AppliedJobs/>} />

      
      </Routes>


    </div>
  )
}
