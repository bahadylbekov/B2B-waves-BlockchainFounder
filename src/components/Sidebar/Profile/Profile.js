import React from 'react';
import ProfileAvatar from './ProfileAvatar';

const Profile = (props) => (
    <div className="profile">
        <div className="profile-avatar">
        <ProfileAvatar />
        </div>
        <p className="profile-title">Leah Stevens</p>
    </div>
);

export default Profile;