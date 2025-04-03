import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Home: React.FC = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return (
        <div>
            <h2>Welcome to Task Manager</h2>
            {isAuthenticated ? (
                <div>
                    <p>Hello, {user?.name}</p>
                    <button onClick={() => logout()}>Log Out</button>
                </div>
            ) : (
                <button onClick={() => loginWithRedirect()}>Log In</button>
            )}
        </div>
    );
};

export default Home;