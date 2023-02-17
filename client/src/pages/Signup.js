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
    return <Navigate to="/profile" replace={true}/>}

  return (
    // <main className="flex-row justify-center mb-4">
    //   <div className="col-12 col-lg-10">
    //     <div className="card">
    //       <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
    //       <div className="card-body">
    //         {data ? (
    //           <p>
    //             Success! You may now head{' '}
    //             <Link to="/">back to the homepage.</Link>
    //           </p>
    //         ) : (
    //           <form onSubmit={handleFormSubmit}>
    //             <input
    //               className="form-input"
    //               placeholder="Your username"
    //               name="username"
    //               type="text"
    //               value={formState.name}
    //               onChange={handleChange}
    //             />
    //             <input
    //               className="form-input"
    //               placeholder="Your email"
    //               name="email"
    //               type="email"
    //               value={formState.email}
    //               onChange={handleChange}
    //             />
    //             <input
    //               className="form-input"
    //               placeholder="******"
    //               name="password"
    //               type="password"
    //               value={formState.password}
    //               onChange={handleChange}
    //             />
    //             <button
    //               className="btn btn-block btn-primary"
    //               style={{ cursor: 'pointer' }}
    //               type="submit"
    //             >
    //               Submit
    //             </button>
    //           </form>
    //         )}

    //         {error && (
    //           <div className="my-3 p-3 bg-danger text-white">
    //             {error.message}
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </main>


    <div
    >
      <CssVarsProvider>
        <main>
            <Box
            sx={{
                backgroundImage: `url(${BackgroundImage})`,
                height: 1000
            }}
            >
          {/* <ModeToggle /> */}
          <Sheet
            
            sx={{
              width: 300,
              height: 300,
              mx: 'auto', // margin left & right
              my: 4, // margin top & botom
              py: 3, // padding top & bottom
              px: 2, // padding left & right
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 2,
              borderRadius: '22px',
              boxShadow: 'md',
              backgroundColor: '#99D98C',
              opacity: '70%'
            }}
            variant="outlined"
          >
            <div>
                
                    
                
              <Typography level="h4" component="h1">
                <b>Welcome!</b>
              </Typography>
              <Typography level="body2">Register with us</Typography>
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
                placeholder="password"
                value={formState.password}
                onChange={handleChange}
              />
            </FormControl>
  
            <Button type="submit"
            sx={{ mt: 1 /* margin top */ }}>Sign up
            </Button>
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