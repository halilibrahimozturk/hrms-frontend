import React from 'react'
import SuggestedJobs from "./SuggestedJobs";
import JobTitles from "./JobTitles";
import FastSearch from './FastSearch';
import JobList from '../pages/JobList'
import SuggestedTitles from './SuggestedTitles';
import {Routes, Route} from "react-router-dom"
import JobDetail from '../pages/JobDetail';



export default function Dashboard() {
  return (
    <div>

      



      <JobTitles />

      <SuggestedJobs />

      <SuggestedTitles />


      <FastSearch />

      {/* <JobList /> */}

      <Routes>
    


    <Route path = "/" element = {<JobList/>} />
    <Route path = "/jobs" element = {<JobList/>} />
    <Route path = "/jobs/:id" element = {<JobDetail/>} />

      
      </Routes>


    </div>
  )
}
