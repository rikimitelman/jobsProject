import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Link } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { ICandidate } from '../Models/candidateModel'; 
import { IJob } from '../Models/jobModel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { getCandidateByJobId, updateCandidate } from '../Service';
import { NavLink} from 'react-router-dom'
import axios from "axios";
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

// export default function BasicRating() {
//   const [value, setValue] = React.useState<number | null>(2);

//   return (
//     <Box
//       sx={{
//         '& > legend': { mt: 2 },
//       }}
//     >
//       <Rating
//         name="simple-controlled"
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       />
//     </Box>
//   );
// }

interface Props{
    data:IJob[] | ICandidate[];
    title:string[];
    name:string;
  }

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  lightRow: {
    backgroundColor: 'rgb(233, 235, 245)',
  },
  darkRow: {
    backgroundColor: 'rgb(207, 213, 234)',
  },
  head: {
    backgroundColor: 'rgb(68, 114, 196)',
  }
});


function GenericTable(props:Props) {
  const classes = useStyles();
  const titles: string[] = props.title;
  const values: IJob[] | ICandidate[]= props.data;
  const name2 = props.name;


  const handleClick = async (object: ICandidate, field: string) => {
    (object as any)[field] = !(object as any)[field];
    try {
      const updatedCandidate = await updateCandidate(object._id, object);
      console.log('Updated candidate:', updatedCandidate);
    } catch (error) {
      console.log('Error:', error);
    }
  }; 

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow component="tr" className={classes.head}>
            {titles?.map((t:string, index)=>(
              <TableCell key = {index} >{t}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
  {values?.map((val: any, index: any) => (
    <TableRow key={index} className={index % 2 === 0 ? classes.lightRow : classes.darkRow}>
      {titles?.map((t: string, index2: any) => (
 

<TableCell key={index2}>
  {t === 'jobName' ? (
    <NavLink to={`/candidate/job/${val.jobId}`}>{val.jobName}</NavLink>
  ) : null}
  {val.hasOwnProperty(t) ? (
    typeof val[t] === 'boolean' ? (
      name2 === 'candidate' ? (
        val[t] ? (
          <CheckCircleOutlineIcon
            className="green-icon"
            onClick={() => handleClick(val, t)}
          />
        ) : (
          <HighlightOffIcon
            className="red-icon"
            onClick={() => handleClick(val, t)}
          />
        )
      ) : val[t] ? (
        <CheckCircleOutlineIcon
          className="green-icon"
          onClick={() => handleClick(val, t)}
        />
      ) : (
        <HighlightOffIcon
          className="red-icon"
          onClick={() => handleClick(val, t)}
        />
      )
    ) : (
      val[t]
    )
  ) : (
    '--'
  )}
</TableCell>

      ))}
    </TableRow>
  ))}
</TableBody>
      </Table>
    </TableContainer> 
  );
}

export default GenericTable;
