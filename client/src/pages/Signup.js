import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Box } from '@mui/material';
import { Navigate } from "react-router-dom";

import BackgroundImage from '../assets/images/banner.png';



import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {

    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
      setFormState('')
    } catch (e) {
      console.error(e);
    }
  };
  if (Auth.loggedIn()) {
    return <Navigate to="/profile" replace={true} />
  }

  return (


    <div
    >
      <CssVarsProvider>
        <main>
          <Box
            sx={{
              backgroundImage: `url(${BackgroundImage})`,
              // height: 1000,
              minHeight: "100vh",
              // display: 'flex',
              // justifyContent: 'center',
              // flexDirection: 'column',
              my: 10,
              py: 0

            }}
          >
            {/* <ModeToggle /> */}
            <Sheet

              sx={{
                width: 300,
                height: 450,
                mx: 'auto', // margin left & right
                // my: -10, // margin top & botom
                py: 5, // padding top & bottom
                px: 2, // padding left & right
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 2,
                top: '70px',
                borderRadius: '22px',
                boxShadow: 'lg',
                backgroundColor: '#99D98C',
                opacity: '100%'
              }}
              variant="outlined"
            >
              <div>



                <Typography fontFamily='Copperplate, Papyrus, fantasy' level="h4" component="h1" align="center">
                  <b>Welcome!</b>
                </Typography>
                <Typography fontFamily="Arial, Helvetica, sans-serif" align="center" level="body2">Register with us</Typography>
              </div>
              <form onSubmit={handleFormSubmit}>
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input
                    // html input attribute
                    name="username"
                    type="username"
                    placeholder="johndoe112"
                    value={formState.username}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>

                  <Input
                    // html input attribute
                    name="email"
                    type="email"
                    placeholder="johndoe@email.com"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input
                    // html input attribute
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    // html input attribute
                    name="first_name"
                    type="first_name"
                    placeholder="First Name"
                    value={formState.first_name}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    // html input attribute
                    name="last_name"
                    type="last_name"
                    placeholder="Last Name"
                    value={formState.last_name}
                    onChange={handleChange}
                  />
                </FormControl>
            
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button type="submit"
                    sx={{ mt: 1 /* margin top */ }}>Sign up
                  </Button>
                </div>
              </form>
              {/* <Typography
              endDecorator={<Link href="/sign-up">Sign up</Link>}
              fontSize="sm"
              sx={{ alignSelf: 'center' }}
            >
              Don&apos;t have an account?
            </Typography> */}
            </Sheet>
          </Box>
        </main>
      </CssVarsProvider>
    </div>

  );
};

export default Signup;