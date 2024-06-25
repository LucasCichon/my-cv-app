import React from 'react';
import profilePic from '../assets/test.png'; // Add your profile picture to the assets folder
import './ProfilePicture.css';

const ProfilePicture = () => {
  return (
    <div className="profile-picture">
      <img src={profilePic} alt="Łukasz Cichon" />
    </div>
  );
};

export default ProfilePicture;
