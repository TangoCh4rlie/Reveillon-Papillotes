import { signOut } from 'next-auth/react';

const LogoutButton = () => {

    const handleLogout = async () => {
            await signOut();
    };

    return (
        <button onClick={handleLogout}>Log out</button>
    );
};

export default LogoutButton;
