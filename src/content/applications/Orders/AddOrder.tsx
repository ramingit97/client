import { Box, Container, Card, Stack, Typography, Link, Tabs, Tab, TextField, FormHelperText, Button } from '@mui/material';



function AddOrder({formik}) {
  return (
    <>
        <Stack spacing={3}>
            <TextField
            error={!!(formik.touched.name && formik.errors.name)}
            fullWidth
            helperText={formik.touched.name && formik.errors.name}
            label="Name"
            name="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="name"
            value={formik.values.name}
            />

        <TextField
            error={!!(formik.touched.description && formik.errors.description)}
            fullWidth
            helperText={formik.touched.description && formik.errors.description}
            label="Description"
            name="description"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="description"
            value={formik.values.description}
            />
        </Stack>
    </>
  )
}




export default AddOrder;
