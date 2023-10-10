Material-UI, Formik, and Yup:
```jsx
import React from 'react';
import { useFormik } from 'formik'; 
import * as Yup from 'yup'; 
import { TextField, Button, Grid, Container, Typography } from '@mui/material'; 

// Define the validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  age: Yup.number()
    .required('Age is required')
    .min(26, 'Age must be greater than or equal to 26')
    .max(49, 'Age must be less than or equal to 49'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

const ContactForm = () => {
  // Create a useFormik instance to manage form state
  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema, // Apply validation schema
    onSubmit: (values) => {
      // Handle form submission here (you can send data to a server, for example)
      console.log('Form submitted:', values);
    },
  });

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              {...formik.getFieldProps('name')} // Connect input to Formik
              error={formik.touched.name && Boolean(formik.errors.name)} 
              // Show error if touched and there is an error
              helperText={formik.touched.name && formik.errors.name} 
              // Display error message
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Age"
              name="age"
              variant="outlined"
              {...formik.getFieldProps('age')}
              error={formik.touched.age && Boolean(formik.errors.age)}
              helperText={formik.touched.age && formik.errors.age}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              variant="outlined"
              {...formik.getFieldProps('email')}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              variant="outlined"
              multiline
              rows={4}
              {...formik.getFieldProps('message')}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ContactForm;
```

Explanation:

1. **Yup Validation Schema**: We define a validation schema using Yup. This schema specifies the rules for each form field, including their types and error messages.

2. **useFormik Hook**: We import and use the `useFormik` hook from Formik to manage form state. It takes an object with `initialValues`, `validationSchema`, and `onSubmit` properties.

3. **Material-UI Components**: We use Material-UI components (`TextField`, `Button`, `Grid`, `Container`, and `Typography`) for the form's UI. These components provide pre-designed and styled elements.

4. **Connecting Inputs to Formik**: We connect each input field to Formik using `{...formik.getFieldProps('fieldName')}`. This binds the field value, onChange, onBlur, and error status to Formik's state and validation.

5. **Displaying Errors**: We show error messages below each input field when the field has been touched (`formik.touched.fieldName`) and there is an error (`formik.errors.fieldName`).

6. **Form Submission**: The form submission is handled by Formik's `onSubmit` function. In this example, we log the form values to the console, but you can replace this with your own submission logic (e.g., sending data to a server).

Using Material-UI for styling and Formik with Yup for form state management and validation is a powerful combination for building forms in React. It offers a structured and efficient way to create forms while maintaining a great user experience. It's considered a best practice for form handling in React applications.