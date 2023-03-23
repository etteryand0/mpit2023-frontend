import { useAtom } from 'jotai';
import React from 'react';
import { userAtom } from '../LoginPage/atom';

const Profile = () => {
  const [user, setUser] = useAtom(userAtom);
  return (
    <div>
      <p>{user ? `username: ${user.username}` : null}</p>
    </div>
  );
};

export default Profile;
