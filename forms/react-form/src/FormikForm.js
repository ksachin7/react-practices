import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, TextField, Button, Grid, Container, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    age: Yup.number()
        .required('Age is required')
        .min(26, 'Age must be greater than or equal to 26')
        .max(49, 'Age must be less than or equal to 49'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
});

const FormikForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Form submitted:', values);
        },
    });

    const CssInput = styled(TextField)({
        '& label.Mui-focused': {
            color: '#A0AAB4',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#B2BAC2',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#E0E3E7',
            },
            '&:hover fieldset': {
                borderColor: '#B2BAC2',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#6F7E8C',
            },
        },
    });

    return (
        <Container maxWidth="sm" sx={{ margin: '30px auto', padding: '27px', backgroundColor: 'rgb(159, 242, 200)' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'white', textTransform: 'uppercase' }}>
                Contact Us
            </Typography>
            <form onSubmit={formik.handleSubmit} className="classes.form">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <CssInput
                            fullWidth
                            label="Name"
                        // name="name"
                        // variant="outlined"
                        // {...formik.getFieldProps('name')}
                        // error={formik.touched.name && Boolean(formik.errors.name)}
                        // helperText={formik.touched.name && formik.errors.name}
                        // sx={{ color: '#cfc', backgroundColor: 'transparent', margin: '5px 0 16px 0', borderColor: 'transparent' }}
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
                            sx={{ backgroundColor: 'rgba(245, 245, 245, 0.467)', margin: '5px 0 16px 0', borderColor: 'transparent' }}
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
                            sx={{ backgroundColor: 'rgba(245, 245, 245, 0.467)', margin: '5px 0 16px 0', borderColor: 'transparent' }}
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
                            sx={{ backgroundColor: 'rgba(245, 245, 245, 0.467)', margin: '5px 0 16px 0', borderColor: 'transparent' }}
                            InputProps={{
                                classes: {
                                    focused: 'classes.focus',
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        // fullWidth
                        // sx={{ backgroundColor: 'rgb(239, 245, 239)', '&:hover': { boxShadow: '0 0 10px rgba(5, 5, 5, 0.2)' } }}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default FormikForm;
