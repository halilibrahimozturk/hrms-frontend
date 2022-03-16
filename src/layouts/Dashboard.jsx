import React from 'react'
import SuggestedJobs from "./SuggestedJobs";
import JobTitles from "./JobTitles";
import FastSearch from './FastSearch';
import JobList from './JobList';
import SuggestedTitles from './SuggestedTitles';
import {Routes, Route} from "react-router-dom"


export default function Dashboard() {
    return (
        <div>

            <JobTitles/>

            <SuggestedJobs/>

            <SuggestedTitles/>

            <FastSearch/>

            {/* <JobList /> */}

            <Routes>

                <Route path="/" element={<JobList/>}/>

            </Routes>


        </div>
    )
}
