export interface IJob extends Document {
    jobName: string;
    status: boolean;
    jobLocation: string;
    companyDescription: string;
    jobDescription: string;
    demands: string;
    _id:string;
}