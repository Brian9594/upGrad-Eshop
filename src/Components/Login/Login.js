import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../../Common/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { Token } from "@mui/icons-material";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        upGrad
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default function Login(props) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
 
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let params = { username, password };
    try{
      console.log(params);
    let rawResponse= await fetch( 'http://localhost:8080/api/auth/signin',{
method:'POST',
headers:{
  "Content-Type":'application/json'
},
body:JSON.stringify(params)
    });
    
    const result=  await rawResponse.json();
    console.log(result);
    if(result?.token){
      window.sessionStorage.setItem('userDetails',JSON.stringify(result));
      navigate('/products')
    }
  }
  catch(e){
console.log('invalid credentials');
  }
}
  return (
    <>
      <Navbar />
      <Box width="30%" margin="auto">
        <Avatar sx={{ margin: "auto", marginTop: "120px", background: "red" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" align="center" mt="10px" mb="4px">
          Sign In
        </Typography>
        <form onSubmit={onSubmitHandler}>
          <Grid container spacing={3}>
            <Grid xs={12} align="center" item>
              <TextField
                required
                type="email"
                label="Email Address"
                name="username"
                variant="outlined"
                fullWidth
                onChange={(e) => setusername(e.target.value)}
                value={username}
              />
            </Grid>
            <Grid xs={12} align="center" item>
              <TextField
                required
                type="password"
                label="Password"
                name="Confirm password"
                variant="outlined"
                fullWidth
                onChange={(e) => setpassword(e.target.value)}
                value={password}
              />
            </Grid>
            <Grid xs={12} align="center" item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                SIGN IN
              </Button>
            </Grid>
            <Grid container>
              <Grid mt="10px" ml="24px" item>
                <Link to="/signup" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4}} />
    </>
  );
}
