import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Box, Stack } from '@mui/material';
import BackgroundImage from '../assets/images/SWOLEMATE2.png';
import { Navigate } from 'react-router-dom';


import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
    
      });

      Auth.login(data.login.token);
      setFormState('')
    } catch (e) {
      console.error(e);
    }

    // clear form values
    // setFormState({
    //   email: '',
    //   password: '',
    // });
  };
  if (Auth.loggedIn()) {
    return <Navigate to="/"  replace={true} />;
  }
  

//   return (
//     <main className="flex-row justify-center mb-4">
//       <div className="col-12 col-lg-10">
//         <div className="card">
//           <h4 className="card-header bg-dark text-light p-2">Login</h4>
//           <div className="card-body">
//             {data ? (
//               <p>
//                 Success! You may now head{' '}
//                 <Link to="/">back to the homepage.</Link>
//               </p>
//             ) : (
//               <form onSubmit={handleFormSubmit}>
//                 <input
//                   className="form-input"
//                   placeholder="Your email"
//                   name="email"
//                   type="email"
//                   value={formState.email}
//                   onChange={handleChange}
//                 />
//                 <input
//                   className="form-input"
//                   placeholder="******"
//                   name="password"
//                   type="password"
//                   value={formState.password}
//                   onChange={handleChange}
//                 />
//                 <button
//                   className="btn btn-block btn-primary"
//                   style={{ cursor: 'pointer' }}
//                   type="submit"
//                 >
//                   Submit
//                 </button>
//               </form>
//             )}

//             {error && (
//               <div className="my-3 p-3 bg-danger text-white">
//                 {error.message}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </main>
//   );




    return (
    <div
    >
      <CssVarsProvider>
        <main>
            <Stack
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
              mt: 20,
              py: 3, // padding top & bottom
              px: 2, // padding left & right
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 2,
              borderRadius: '22px',
              boxShadow: 'md',
              backgroundColor: '#99D98C',
              opacity: '100%',
            }}
            variant="outlined"
          >
         
            <div>
                
              <Typography level="h4" component="h1">
                <b>Welcome!</b>
              </Typography>
              <Typography level="body2">Sign in to continue.</Typography>
            </div>
            <form onSubmit={handleFormSubmit}>
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
            <FormControl onSubmit={handleFormSubmit}>
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

  
            <Button onClick={handleFormSubmit} sx={{ mt: 1 }}>Log in</Button>
            <div className="cardbody">

            </div>
            <Typography> 
             Don't have an account?
            <Link to="/signup"
            >Sign up</Link>
            
            </Typography>
            </form>
     
          </Sheet>
         

          </Stack>
        </main>
      </CssVarsProvider>
      </div>
            
    );
  }



export default Login;