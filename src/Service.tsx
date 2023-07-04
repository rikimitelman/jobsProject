import axios from 'axios'
import { ICandidate } from "./Models/candidateModel";
import { IJob } from "./Models/jobModel";


const baseUrl="http://localhost:8000/"


export default async function getAllJobs(): Promise<IJob[]>{
    try {
        return (await axios.get(`${baseUrl}job/calculatedJobs`)).data
    } catch (error) {
        console.log('error: ', error)
        return [];
    }
};
  const getAlCandidates = async (): Promise<ICandidate[]> => {
    try {
      return (await axios.get(`${baseUrl}candidate`)).data
  } catch (error) {
      console.log('error: ', error)
      return [];
  }
  };
  const getCandidateByJobId = async (id:String) => {
    try {
      const response = await axios.get(`${baseUrl}candidate/job/${id}`);
      return response.data;
    } catch (error) {
      console.log('Error:', error);
      return [];
    }
  };

  const updateCandidate = async (id: string, data: Partial<ICandidate>) => {
    try {
      const response = await axios.put(`${baseUrl}candidate/${id}`, data);
      return response.data;
    } catch (error) {
      console.log('Error:', error);
      return null;
    }
  };

  export { getAllJobs, getAlCandidates, getCandidateByJobId, updateCandidate };
  