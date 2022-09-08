import { 
  Container,
   Grid,
    Paper,
     TextField,
     Button,
     InputAdornment,
     IconButton } from "@mui/material";
     import { useForm } from "react-hook-form";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import React, {useState} from "react";

const Login = () => {
  const {register,handleSubmit} = useForm()
  const onSubmit=(data) => console.log(data)
  const [values, setValues] = useState({
    email:"",
    password:"",
    showPass:false
  });
  const handlePasswordV = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    })
  }
  return (
    <div>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
      {/* This is Login Fileds */}
          <Paper elevation={2} sx={{ padding: 5 }}>
            <Grid Container direction={"column"} spacing={2}>
              <form onSubmit={handleSubmit(onSubmit)}>
              <Grid item>
                {/* This is Email Filed of Login */}
                <TextField
                  type="email"
                  {...register("email",{required:"Required"}) }
                  fullWidth
                  label="Enter Your Email"
                  placeholder="user@gmail.com"
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              {/* This is Password Filed of Login */}
              <Grid item>
                <TextField
                  type={values.showPass ? "text" : "password"}
                  {...register("password",{required:"Required"}) }
                  fullWidth
                  label="Enter Your password"
                  placeholder="Password"
                  variant="outlined"
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                       position="end">
                        <IconButton
                        onClick={handlePasswordV}
                         aria-label="toggle password"
                         edge="end"
                        >
                          {values.showPass ? (
                         <VisibilityIcon />
                          ): (
                            <VisibilityOffIcon />
                          )
                        }
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              {/* This is Button of Login */}
              <Grid item>
              <Button variant="contained"
               fullWidth color="success"
               type="submit"
               >Sign In
               </Button>
              </Grid>
              </form>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
