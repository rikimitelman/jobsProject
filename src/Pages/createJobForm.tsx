import React, { useState, ChangeEvent, FormEvent } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



interface FormData {
    title: string;
    description: string;
    salary: string;
    location: string;
    requirements: string;
    image: File | null;
    imageBase64: string | null;
  }
  
  const useStyles = makeStyles(() =>
    createStyles({
      form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      },
      submitButton: {
        marginTop: '2rem',
      },
    })
  );
  
  const CreateJobForm: React.FC = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState<FormData>({
      title: '',
      description: '',
      salary: '',
      location: '',
      requirements: '',
      image: null,
      imageBase64: null,
    });
    const [jobLink, setJobLink] = useState<string>('');
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //   if (e.target.name === 'image') {
    //     const file = e.target.files && e.target.files[0];
    //     if (file) {
    //       const reader = new FileReader();
    //       reader.onloadend = () => {
    //         setFormData({ ...formData, [e.target.name]: file, imageBase64: reader.result as string });
    //       };
    //       reader.readAsDataURL(file);
    //     } else {
    //       setFormData({ ...formData, [e.target.name]: null, imageBase64: null });
    //     }
    //   } else {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    //   }
    };
  
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      // Handle form submission logic here
      // Save the form data and imageBase64 to a database or API
      // Generate a link to the job based on the saved data
      const link = `https://example.com/apply?title=${encodeURIComponent(
        formData.title
      )}&location=${encodeURIComponent(formData.location)}`;
      setJobLink(link);
      // Reset the form data
      setFormData({
        title: '',
        description: '',
        salary: '',
        location: '',
        requirements: '',
        image: null,
        imageBase64: null,
      });
    };
  
    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files && e.target.files[0];
  
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, image: file, imageBase64: reader.result as string });
        };
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Job Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          label="Company Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          variant="outlined"
          multiline
          rows={4}
        />
        <TextField
          label="Job Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          variant="outlined"
          multiline
          rows={4}
        />
        <TextField
          label="Requirements"
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          variant="outlined"
          multiline
          rows={4}
        />
        <input type="file" name="image" onChange={handleImageUpload} accept="image/*" />
        {formData.imageBase64 && (
          <img src={formData.imageBase64} alt="Uploaded Image" style={{ width: '300px', height: 'auto' }} />
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submitButton}
        >
          Submit
        </Button>
        {jobLink && (
          <p>
            Job Link: <a href={jobLink}>{jobLink}</a>
          </p>
        )}
      </form>
    );
  };
  

export default CreateJobForm;
