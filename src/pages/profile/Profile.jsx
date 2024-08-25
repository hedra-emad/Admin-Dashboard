import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import React from "react";
import Header from "../../components/Header";


const currencies = [
  {
    value: "User",
    label: "User",
  },
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
];


function Profile() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


 


  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const regContact= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const handleClick = () => {
      setOpen(true);
    };
    
    const onSubmit = () => {
      console.log("done");
      handleClick()
    };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Header title={"CREATE USER"} subTitle={"Create a New User Profile"} isDashboard={true} />


      <Stack direction={"row"} gap={3}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={errors.firstName ? "Required & min 3 char" : null}
          label="First Name"
          variant="filled"
          sx={{ width: "50%" }}
          {...register("firstName", { required: true, minLength: 3 })}
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={errors.lastName ? "Required & min 3 char" : null}
          label="Last Name"
          variant="filled"
          sx={{ width: "50%" }}
          {...register("lastName", { required: true, minLength: 3 })}
        />
      </Stack>
      <TextField  label="Email" variant="filled" 
       error={Boolean(errors.email)}
       helperText={errors.email ? "Please provide a valid email" : null}
       {...register("email", { required: true, pattern: regEmail})}
      />
      <TextField
       error={Boolean(errors.contact)}
       helperText={errors.contact ? "Invalid phone number." : null}
        label="Contact Number"
        variant="filled"
        {...register("contact", { required: true, pattern: regContact})}
      />
      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />
      <TextField select label="Role" variant="filled" defaultValue="User">
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          variant="contained"
          sx={{ textTransform: "capitalize" }}
        >
          Create New User
        </Button>

        <Snackbar anchorOrigin={{ vertical:"top",horizontal: "right" }} open={open} autoHideDuration={6000} onClose={handleClose} >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Account Created Successfuly
        </Alert>
      </Snackbar>
      </Box>
    </Box>
  );
}

export default Profile;
