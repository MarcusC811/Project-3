import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import  ProfilePage  from "../components/ProfilePage.js"

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  if (!Auth.loggedIn()) {
    return <Navigate to="/login" replace={true}/>}

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4 align="center" className="noLogIn">
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  if (!user?.profile?.bio) {
    return <h3 align="center" className="noBio" >No bio has been created yet.</h3>;
  }

  return (
    <div>
      <h3 align="center" className="profileHeader" >{user.username}'s Profile</h3>
          <div key={user._id} className="card mb-3" align="center">
            <h4 className="card-header bg-primary text-light p-2 m-0" align="center">
              Hello, I'm {user.profile.first_name} & here's a little bit about me
            </h4>
            <div className="card-body bg-light p-2" align="center">
              <p>{user.profile.bio}</p>
              <div><ProfilePage/></div>
            </div>
          </div>
    </div>
  );
};
export default Profile;
