import { useEffect, useState } from 'react';
import GenericTable from '../Components/table';
import { ICandidate } from '../Models/candidateModel';
import { useParams } from 'react-router-dom';
import { getCandidateByJobId } from '../Service';

function Candidate(): JSX.Element {
    const {id} =useParams();
    const [candidates, setCandidates] = useState<ICandidate[]>([]);
    const title: string[] = ["candidateName", "candidatePhone", "candidateEmail", "rating", "interview", "screeningCall", "task", "jobId"] 

    useEffect(() => {
      console.log(id)
      async function fetchData() {
        if(id!=null)
          var response = await getCandidateByJobId(id);
        setCandidates(response);
      }

      fetchData();
    }, []);

    return (
      <>
        <GenericTable title={title} data={candidates} name={"candidate"}/>
      </>
    );
}

export default Candidate;