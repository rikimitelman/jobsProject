import React, { useEffect, useState } from 'react';
import GenericTable from '../Components/table';
import { getAllJobs } from '../Service';
import { IJob } from '../Models/jobModel';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Job(): JSX.Element {

    const [jobs, setJobs] = useState<IJob[]>([]);
    const title: string[] = ["jobName", "status", "total", "interview", "screeningCall", "task"]

    
    useEffect(() => {
      async function fetchData() {
        const response = await getAllJobs();
        setJobs(response);
      }

      fetchData();
    }, []);

    return (
      <>
      <br></br>
      <br></br>
      <Link to="/createJobForm">
      <Button variant="contained" color="primary">add job</Button>
      </Link>
      <br></br>
      <br></br>
        <GenericTable title={title} data={jobs} name={"job"}/>
      </>
    );
}

export default Job;
