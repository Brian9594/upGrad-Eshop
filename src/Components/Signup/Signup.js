import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import "./Signup.css";
import Navbar from "../../Common/Navbar/Navbar";
import { useState } from "react";
export default function SignUp() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Confirmpassword, setConfirmpassword] = useState("");
  const [contactnumber, setcontactnumber] = useState("");

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

  const handleSubmit = (e) => {
  e.preventDefault();
  let params = { firstName: firstname, lastName: lastname, email, password, contactNumber: contactnumber };
  console.log(params)
    fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(params),
    }).then(res=>res.json()).then(res=>{
      console.log(res)
    }).catch(Err=>{
      console.log(Err)
    });
    
  };
  return (
    <>
      <Navbar />
      <Box width="30%" margin="auto">
        <Avatar sx={{ margin: "auto", marginTop: "120px", background: "red" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" align="center" mt="10px" mb="4px">
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit} method="post">
          <Grid container spacing={2}>
            <Grid xs={12} align="center" item>
              <TextField
                required
                type="FirstName"
                label="FirstName"
                name="firstname"
                variant="outlined"
                fullWidth
                onChange={(e) => setfirstname(e.target.value)}
                value={firstname}
              />
            </Grid>
            <Grid xs={12} align="center" item>
              <TextField
                required
                type="LastName"
                label="LastName"
                name="lastname"
                variant="outlined"
                fullWidth
                onChange={(e) => setlastname(e.target.value)}
                value={lastname}
              />
            </Grid>
            <Grid xs={12} align="center" item>
              <TextField
                required
                type="email"
                label="Email Address"
                name="email"
                variant="outlined"
                fullWidth
                onChange={(e) => setemail(e.target.value)}
                value={email}
              />
            </Grid>
            <Grid xs={12} align="center" item>
              <TextField
                required
                type="password"
                label="Password"
                name="password"
                variant="outlined"
                fullWidth
                onChange={(e) => setpassword(e.target.value)}
                value={password}
              />
            </Grid>
            <Grid xs={12} align="center" item>
              <TextField
                required
                type="password"
                label="Password"
                name="Confirmpassword"
                variant="outlined"
                fullWidth
                onChange={(e) => setConfirmpassword(e.target.value)}
                value={Confirmpassword}
              />
            </Grid>
            <Grid xs={12} align="center" item>
              <TextField
                required
                type="mobile number"
                label="Contact Number"
                name="contactnumber"
                variant="outlined"
                fullWidth
                onChange={(e) => setcontactnumber(e.target.value)}
                value={contactnumber}
              />
            </Grid>
            <Grid xs={12} align="center" item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                SIGN UP
              </Button>
            </Grid>
            <Grid container justifyContent="flex-end" mt="10px">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 8, mb: 4,ml:20 }} />
          </Grid>
        </form>
      </Box>
    </>
  );
}
