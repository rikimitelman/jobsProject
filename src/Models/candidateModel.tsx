import mongoose from "mongoose";

export interface ICandidate  {
    candidateName: string;
    candidatePhone: string;
    candidateEmail: string;
    rating: number;
    interview: Boolean;
    screeningCall: Boolean;
    task: Boolean;
    jobId: string; 
    _id:string;
}