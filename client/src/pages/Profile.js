import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import ProfilePage from '../components/ProfilePage.js';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  if (!Auth.loggedIn()) {
    return <Navigate to="/login" replace={true} />;
  }

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

  // Get the start and end of the current week
  const today = new Date();
  const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
  const endOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6));

  return (
    <div>
      <h3 align="center" className="profileHeader">
        {user.username}'s Workout Plan
      </h3>
      <div key={user._id} className="card mb-3" align="center">
        <div className="card-body bg-light p-2" align="center">
          <p className="calendarHeader">Week of <br></br>{startOfWeek.toLocaleDateString()} - {endOfWeek.toLocaleDateString()}
          </p>
          <div>
            <ProfilePage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

